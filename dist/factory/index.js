"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainFactory = void 0;
const consts_1 = require("../consts");
__exportStar(require("./factories"), exports);
const __1 = require("..");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const axios_1 = __importDefault(require("axios"));
const cons_1 = require("./cons");
const out_1 = require("@elrondnetwork/erdjs/out");
const heartbeat_1 = require("../heartbeat");
const algorand_1 = require("../helpers/algorand");
const algosdk_1 = __importDefault(require("algosdk"));
const js_base64_1 = require("js-base64");
function mapNonceToParams(chainParams) {
    const cToP = new Map();
    cToP.set(2, chainParams.elrondParams);
    cToP.set(3, chainParams.hecoParams);
    cToP.set(4, chainParams.bscParams);
    cToP.set(5, chainParams.ropstenParams);
    cToP.set(6, chainParams.avalancheParams);
    cToP.set(7, chainParams.polygonParams);
    cToP.set(8, chainParams.fantomParams);
    cToP.set(9, chainParams.tronParams);
    cToP.set(11, chainParams.celoParams);
    cToP.set(12, chainParams.harmonyParams);
    cToP.set(13, chainParams.ontologyParams);
    cToP.set(14, chainParams.xDaiParams);
    cToP.set(15, chainParams.algorandParams);
    return cToP;
}
/**
 * This function is the basic entry point to use this package as a library.
 * @param appConfig: {@link AppConfig} The configuration of the library.
 * @param chainParams: {@link ChainParams} Contains the details for all the chains to mint and transfer NFTs between them.
 * @returns {ChainFactory}: A factory object that can be used to mint and transfer NFTs between chains.
 */
function ChainFactory(appConfig, chainParams) {
    let map = new Map();
    let cToP = mapNonceToParams(chainParams);
    const heartbeatRepo = heartbeat_1.bridgeHeartbeat(appConfig.heartbeatUri);
    const remoteExchangeRate = cons_1.exchangeRateRepo(appConfig.exchangeRateUri);
    const txSocket = __1.socketHelper(appConfig.txSocketUri);
    const nftlistRest = axios_1.default.create({
        baseURL: appConfig.nftListUri,
        headers: {
            Authorization: `Bearer ${appConfig.nftListAuthToken}`,
        },
    });
    const inner = async (chain) => {
        let helper = map.get(chain);
        if (helper === undefined) {
            helper = await consts_1.CHAIN_INFO[chain].constructor(cToP.get(chain));
        }
        return helper;
    };
    async function calcExchangeFees(fromChain, toChain, val) {
        const exrate = await remoteExchangeRate.getExchangeRate(consts_1.CHAIN_INFO[toChain].currency, consts_1.CHAIN_INFO[fromChain].currency);
        return val
            .dividedBy(consts_1.CHAIN_INFO[toChain].decimals)
            .times(exrate * 1.05)
            .times(consts_1.CHAIN_INFO[fromChain].decimals)
            .integerValue(bignumber_js_1.default.ROUND_CEIL);
    }
    const estimateFees = async (fromChain, toChain, nft, receiver) => {
        if (fromChain.isWrappedNft(nft)) {
            const estimate = await toChain.estimateValidateUnfreezeNft(receiver, nft.uri);
            const conv = await calcExchangeFees(fromChain.getNonce(), toChain.getNonce(), estimate);
            return conv;
        }
        else {
            const estimate = await toChain.estimateValidateTransferNft(receiver, "a".repeat(55) // approx size of uri
            );
            const conv = await calcExchangeFees(fromChain.getNonce(), toChain.getNonce(), estimate);
            return conv;
        }
    };
    async function bridgeStatus() {
        const res = await heartbeatRepo.status();
        return Object.fromEntries(Object.entries(res).map(([c, s]) => [
            c,
            s.bridge_alive ? "alive" : "dead",
        ]));
    }
    async function requireBridge(chains) {
        const status = await heartbeatRepo.status();
        let deadChain;
        const alive = chains.every((c) => {
            const stat = status[c].bridge_alive;
            if (!stat) {
                deadChain = c;
            }
            return stat;
        });
        if (!alive) {
            throw Error(`chain ${deadChain} is dead! its unsafe to use the bridge`);
        }
    }
    function nonceToChainNonce(nonce) {
        switch (nonce) {
            case 2: {
                return consts_1.Chain.ELROND;
            }
            case 3: {
                return consts_1.Chain.HECO;
            }
            case 4: {
                return consts_1.Chain.BSC;
            }
            case 5: {
                return consts_1.Chain.ETHEREUM;
            }
            case 6: {
                return consts_1.Chain.AVALANCHE;
            }
            case 7: {
                return consts_1.Chain.POLYGON;
            }
            case 8: {
                return consts_1.Chain.FANTOM;
            }
            case 9: {
                return consts_1.Chain.TRON;
            }
            case 11: {
                return consts_1.Chain.CELO;
            }
            case 12: {
                return consts_1.Chain.HARMONY;
            }
            case 14: {
                return consts_1.Chain.XDAI;
            }
            default: {
                throw Error(`unknown chain ${nonce}`);
            }
        }
    }
    return {
        async generatePreTransferTxn(from, sender, nft, fee) {
            return await from.preTransferRawTxn(nft, sender, fee);
        },
        async generateNftTxn(chain, toNonce, sender, receiver, nft, fee) {
            if (chain.isWrappedNft(nft)) {
                return chain.unfreezeWrappedNftTxn(receiver, nft, fee, sender);
            }
            else {
                return chain.transferNftToForeignTxn(toNonce, receiver, nft, fee, sender);
            }
        },
        async generateMintTxn(chain, sender, nft) {
            return await chain.mintRawTxn(nft, sender);
        },
        async getDestinationTransaction(chain, targetNonce, txn) {
            const action = await chain.extractAction(txn);
            const hash = await txSocket.waitTxHash(targetNonce, action);
            const status = await chain.extractTxnStatus(hash);
            return [hash, status];
        },
        nonceToChainNonce,
        async pkeyToSigner(nonce, key) {
            let chain = nonceToChainNonce(nonce);
            switch (chain) {
                case consts_1.Chain.ELROND: {
                    return out_1.UserSigner.fromPem(key);
                }
                case consts_1.Chain.TRON: {
                    return key;
                }
                case consts_1.Chain.ALGORAND: {
                    const algo = await inner(consts_1.Chain.ALGORAND);
                    const mnem = algosdk_1.default.secretKeyToMnemonic(js_base64_1.Base64.toUint8Array(key));
                    return algorand_1.algoSignerWrapper(algo.algod, algosdk_1.default.mnemonicToSecretKey(mnem));
                }
                default: {
                    const chainH = await inner(chain);
                    return chainH.createWallet(key);
                }
            }
        },
        estimateFees,
        inner,
        bridgeStatus,
        updateParams(chainNonce, params) {
            map.delete(chainNonce);
            cToP.set(chainNonce, params);
        },
        async nftList(chain, owner) {
            let data = await nftlistRest
                .get(`/nfts/${chain.getNonce()}/${owner}`)
                .then((v) => v.data.data);
            const nonce = chain.getNonce();
            if (nonce != consts_1.Chain.ALGORAND || nonce != consts_1.Chain.ELROND) {
                data = data.filter((v) => v.native.contractType != "ERC1155");
            }
            return data;
        },
        transferNft: async (fromChain, toChain, nft, sender, receiver, fee) => {
            await requireBridge([fromChain.getNonce(), toChain.getNonce()]);
            if (!fee) {
                fee = await estimateFees(fromChain, toChain, nft, receiver);
            }
            if (!(await toChain.validateAddress(receiver))) {
                throw Error("invalid address");
            }
            if (fromChain.isWrappedNft(nft)) {
                const meta = await axios_1.default.get(nft.uri);
                if (meta.data.wrapped.origin != toChain.getNonce().toString()) {
                    throw Error("trying to send wrapped nft to non-origin chain!!!");
                }
                const res = await fromChain.unfreezeWrappedNft(sender, receiver, nft, fee);
                return res;
            }
            else {
                const res = await fromChain.transferNftToForeign(sender, toChain.getNonce(), receiver, nft, fee);
                return res;
            }
        },
        mint: async (chain, owner, args) => {
            return await chain.mintNft(owner, args);
        },
        claimAlgorandNft: async (origin, hash, claimer) => {
            const action = await origin.extractAction(hash);
            const algo = await inner(consts_1.Chain.ALGORAND);
            return await algo.claimAlgorandNft(claimer, origin.getNonce(), action, txSocket);
        },
    };
}
exports.ChainFactory = ChainFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBT0Esc0NBT21CO0FBQ25CLDhDQUE0QjtBQUU1QiwwQkFpQlk7QUFDWixnRUFBcUM7QUFFckMsa0RBQTBCO0FBQzFCLGlDQUEwQztBQUMxQyxrREFBc0Q7QUFFdEQsNENBQStDO0FBRS9DLGtEQU02QjtBQUM3QixzREFBOEI7QUFDOUIseUNBQW1DO0FBb05uQyxTQUFTLGdCQUFnQixDQUN2QixXQUFpQztJQUtqQyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsRUFHakIsQ0FBQztJQUVKLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JDLElBQUks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