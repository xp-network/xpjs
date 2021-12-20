"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainFactoryConfigs = void 0;
//@ts-ignore
const tronweb_1 = __importDefault(require("tronweb"));
const consts_1 = require("../consts");
const ethers_1 = require("ethers");
const EVM_VALIDATORS = [
    "0xadFF46B0064a490c1258506d91e4325A277B22aE",
    "0xa50d8208B15F5e79A1ceABdB4a3ED1866CEB764c",
    "0xa3F99eF33eDA9E54DbA4c04a6133c0c507bA4352",
    // '0xAC415a404b5275EF9B3E1808870d8393eCa843Ec',
    // '0xca2e73418bEbe203c9E88407f68C216CdCd60b38',
    // '0x2523d5F7E74A885c720085713a71389845A8F0D2',
    // '0xEBAC44f9e63988112Eb4AfE8B8E03e179b6429A6'
];
const EVM_TESTNET_VALIDATORS = [
    "0x060093d5559dcF01aeD66042Ba33bf243ee422b6",
    "0xd067607e5D22BD8Fb806e07090FaE9A048a8Fc0d",
    "0xB331E65875EeF5979b83DdF8aFB05bC5E86bB78D",
    "0xB6C11DC232ab25BD61b3efc7a95C971ec002127C",
    "0x848AF71847407d27fD8DD3A099F43F59B617C26a",
    "0x54E68543464e0253C5A9e83471fc00aa9866d7bE",
    "0x4Cfc8800606EDBd970298bB040Fc8D859c806702",
];
const middleware_uri = "https://notifierrest.herokuapp.com";
var ChainFactoryConfigs;
(function (ChainFactoryConfigs) {
    ChainFactoryConfigs.TestNet = () => ({
        elrondParams: {
            node_uri: consts_1.TestNetRpcUri.ELROND,
            minter_address: "erd1qqqqqqqqqqqqqpgq3cpmdjk5mwnvqqe7tswcwhdufsddjd4vk4as8qtp05",
            esdt_swap_address: "erd1qqqqqqqqqqqqqpgqsu5cn3h380l7cem86zfs6k904wnsa9hak4as942duy",
            esdt: "XPNET-acb2d0",
            esdt_nft: "XPNFT-1a124f",
            esdt_swap: "WEGLD-fdf787",
            validators: [
                "erd1akrlykhmjl8ykhfukhykzdvcnyay5d0kvdazc82wwt7cvn83arzsgg7w9c",
                "erd1dt2mttgf2xpdy9jlxlrd0fcr3nf4sly2tpmam0djq7jj65axvkyqv6hu20",
                "erd1hd3afqqhunypqdz292qledsxwtjlnf9t60mftf4xq5tuyutnqntqg5dng4",
                "erd14qgeqvr2lfnv7m3nzrmpzdzr5tecns50s82qndk2s84qhw3fg6vsfcaffa",
                "erd16gztcqtjzr20ytrwm2wefylydfxhgv7a96kwppa5z3840x4rvavqeazy0v",
                "erd19tydrsuwcpcnwku5p90xk3n82gxhmvz54s8fsvz6yhc4ugq67f4qaayrex",
                "erd1575jxqnmt9q495xtmre0gmxpc9gjzrcx9ypw7gls5xg59k0m73ksgp0xfu",
            ],
            nonce: 2,
        },
        tronParams: {
            provider: new tronweb_1.default({ fullHost: consts_1.TestNetRpcUri.TRON }),
            middleware_uri,
            erc1155_addr: "string",
            minter_addr: "string",
            erc721_addr: "string",
            validators: EVM_TESTNET_VALIDATORS,
            nonce: consts_1.Chain.TRON,
        },
        avalancheParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.TestNetRpcUri.AVALANCHE),
            minter_addr: "0xB6F4Bd61aaD6EaEE8C4e5a5CF99A2fa1dd1E929a",
            erc1155_addr: "0xC26f32b14d64306E493476b411d29d8822a2B353",
            erc721_addr: "0xeE5519A1Fa69367539CFc16d6BfC2c1477f57d33",
            validators: EVM_TESTNET_VALIDATORS,
            nonce: consts_1.Chain.AVALANCHE,
        },
        polygonParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.TestNetRpcUri.POLYGON),
            minter_addr: "0xeed0fF20D9B1bd398b709e0d0405AC2B697e6083",
            erc1155_addr: "0xFC58eB64D9257526cbA96C2Dda8Adc3d25Db770F",
            erc721_addr: "0xf6d7B49B239FdE7EBfa82793911B812f42C06f6A",
            validators: EVM_TESTNET_VALIDATORS,
            nonce: consts_1.Chain.POLYGON,
        },
        fantomParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.TestNetRpcUri.FANTOM),
            minter_addr: "0xB6F4Bd61aaD6EaEE8C4e5a5CF99A2fa1dd1E929a",
            erc1155_addr: "0xC26f32b14d64306E493476b411d29d8822a2B353",
            erc721_addr: "0xeE5519A1Fa69367539CFc16d6BfC2c1477f57d33",
            validators: EVM_TESTNET_VALIDATORS,
            nonce: consts_1.Chain.FANTOM,
        },
        bscParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.TestNetRpcUri.BSC),
            minter_addr: "0xB6F4Bd61aaD6EaEE8C4e5a5CF99A2fa1dd1E929a",
            erc1155_addr: "0xC26f32b14d64306E493476b411d29d8822a2B353",
            erc721_addr: "0xeE5519A1Fa69367539CFc16d6BfC2c1477f57d33",
            validators: EVM_TESTNET_VALIDATORS,
            nonce: consts_1.Chain.BSC,
        },
        celoParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.TestNetRpcUri.CELO),
            minter_addr: "0xB6F4Bd61aaD6EaEE8C4e5a5CF99A2fa1dd1E929a",
            erc1155_addr: "0xC26f32b14d64306E493476b411d29d8822a2B353",
            erc721_addr: "0xeE5519A1Fa69367539CFc16d6BfC2c1477f57d33",
            validators: EVM_TESTNET_VALIDATORS,
            nonce: consts_1.Chain.CELO,
        },
        harmonyParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.TestNetRpcUri.HARMONY),
            minter_addr: "0xB6F4Bd61aaD6EaEE8C4e5a5CF99A2fa1dd1E929a",
            erc1155_addr: "0xC26f32b14d64306E493476b411d29d8822a2B353",
            erc721_addr: "0xeE5519A1Fa69367539CFc16d6BfC2c1477f57d33",
            validators: EVM_TESTNET_VALIDATORS,
            nonce: consts_1.Chain.HARMONY,
        },
        ropstenParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.TestNetRpcUri.ROPSTEN),
            minter_addr: "0x4378A403B0122197EE6ae579bA37Ba392E8cf828",
            erc1155_addr: "0x5F6565049969902bC6709Fdb2a89E81F1dAeA204",
            erc721_addr: "0x2BA6Aa59933e54ce14aab8Fd4a061a8E66713423",
            validators: EVM_TESTNET_VALIDATORS,
            nonce: consts_1.Chain.ETHEREUM,
        },
        xDaiParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.TestNetRpcUri.XDAI),
            minter_addr: "0xB6F4Bd61aaD6EaEE8C4e5a5CF99A2fa1dd1E929a",
            erc1155_addr: "0xC26f32b14d64306E493476b411d29d8822a2B353",
            erc721_addr: "0xeE5519A1Fa69367539CFc16d6BfC2c1477f57d33",
            validators: EVM_TESTNET_VALIDATORS,
            nonce: consts_1.Chain.XDAI,
        },
        algorandParams: {
            algodApiKey: "e5b7d342b8a742be5e213540669b611bfd67465b754e7353eca8fd19b1efcffd",
            algodUri: "https://algorand-node.xp.network/",
            algoIndexer: "https://algoexplorerapi.io/idx2",
            nonce: consts_1.Chain.ALGORAND,
            sendNftAppId: 458971166,
            algodPort: 443,
        },
    });
    ChainFactoryConfigs.MainNet = () => ({
        elrondParams: {
            node_uri: consts_1.MainNetRpcUri.ELROND,
            minter_address: "erd1qqqqqqqqqqqqqpgq98ufyktqukxqw79f7n22sr3u6n05u7d7p7tqmzhv32",
            esdt_swap_address: "erd1qqqqqqqqqqqqqpgqgc9vfqcdqw0ucu602elf0lt4tysfmxpep7tqhrrr9x",
            esdt: "XPNET-738176",
            esdt_nft: "XPNFT-676422",
            esdt_swap: "WEGLD-071de0",
            validators: [
                "erd1lwyjz0adjd3vqpcjqs5rntw6sxzf9pvqussadygy2u76mz9ap7tquc0z5s",
                "erd1tzc9qltpntlgnpetrz58llqsg93dnxety54umln0kuq2k6dajf6qk796wh",
                "erd14aw3kvmepsffajkywp6autxxf7zy77uvnhy9e93wwz4qjkd88muquys007",
                "erd1nj85l5qx2gn2euj4hnjzq464euwzh8fe6txkf046nttne7y3cl4qmndgya",
                "erd1fl3mpjnrev7x5dz4un0hpzhvny4dlv4d2zt38yhqe37u9ulzx2aqeqr8sr",
                "erd16kufez3g0tmxhyra2ysgpkqckurqe80ulxet8dfffm0t28tnavpstr0s93",
                "erd1wua3q7zja2g08gyta4pkd4eax2r03c3edsz72dp90m3z69rk8yuqqnrg63",
            ],
            nonce: consts_1.Chain.ELROND,
        },
        tronParams: {
            provider: new tronweb_1.default({ fullHost: consts_1.MainNetRpcUri.TRON }),
            middleware_uri,
            erc1155_addr: "TSg3nSjuSuVf5vEk6f2WwM9Ph8bEaNNz9B",
            minter_addr: "TMx1nCzbK7tbBinLh29CewahpbR1k64c8E",
            erc721_addr: "TRON",
            nonce: consts_1.Chain.TRON,
            validators: EVM_VALIDATORS,
        },
        avalancheParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.MainNetRpcUri.AVALANCHE),
            minter_addr: "0x5B916EFb0e7bc0d8DdBf2d6A9A7850FdAb1984C4",
            erc1155_addr: "0xe12B16FFBf7D79eb72016102F3e3Ae6fe03fCA56",
            erc721_addr: "0xe12B16FFBf7D79eb72016102F3e3Ae6fe03fCA56",
            validators: EVM_VALIDATORS,
            nonce: consts_1.Chain.AVALANCHE,
        },
        polygonParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.MainNetRpcUri.POLYGON),
            minter_addr: "0x2f072879411503580B8974A221bf76638C50a82a",
            erc1155_addr: "0xc69ECD37122A9b5FD7e62bC229d478BB83063C9d",
            erc721_addr: "0xc69ECD37122A9b5FD7e62bC229d478BB83063C9d",
            validators: EVM_VALIDATORS,
            nonce: consts_1.Chain.POLYGON,
        },
        fantomParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.MainNetRpcUri.FANTOM),
            minter_addr: "0x5B916EFb0e7bc0d8DdBf2d6A9A7850FdAb1984C4",
            erc1155_addr: "0xe12B16FFBf7D79eb72016102F3e3Ae6fe03fCA56",
            erc721_addr: "0xe12B16FFBf7D79eb72016102F3e3Ae6fe03fCA56",
            validators: EVM_VALIDATORS,
            nonce: consts_1.Chain.FANTOM,
        },
        bscParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.MainNetRpcUri.BSC),
            minter_addr: "0xF8679A16858cB7d21b3aF6b2AA1d6818876D3741",
            erc1155_addr: "0xa1B8947Ff4C1fD992561F629cfE67aEb90DfcBd5",
            erc721_addr: "0xa1B8947Ff4C1fD992561F629cfE67aEb90DfcBd5",
            validators: EVM_VALIDATORS,
            nonce: consts_1.Chain.BSC,
        },
        celoParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.MainNetRpcUri.CELO),
            minter_addr: "string",
            erc1155_addr: "string",
            erc721_addr: "string",
            validators: EVM_VALIDATORS,
            nonce: consts_1.Chain.CELO,
        },
        harmonyParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.MainNetRpcUri.HARMONY),
            minter_addr: "string",
            erc1155_addr: "string",
            erc721_addr: "string",
            validators: [],
            nonce: consts_1.Chain.HARMONY,
        },
        ropstenParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.MainNetRpcUri.ETHEREUM),
            minter_addr: "0x8B2957DbDC69E158aFceB9822A2ff9F2dd5BcD65",
            erc1155_addr: "0x09F4e56187541f2bC660B0810cA509D2f8c65c96",
            erc721_addr: "0x09F4e56187541f2bC660B0810cA509D2f8c65c96",
            validators: EVM_VALIDATORS,
            nonce: consts_1.Chain.ETHEREUM,
        },
        xDaiParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.MainNetRpcUri.XDAI),
            minter_addr: "0x14fb9d669d4ddf712f1c56Ba7C54FF82D9be6377",
            erc1155_addr: "0x8B2957DbDC69E158aFceB9822A2ff9F2dd5BcD65",
            erc721_addr: "0x8B2957DbDC69E158aFceB9822A2ff9F2dd5BcD65",
            validators: EVM_VALIDATORS,
            nonce: consts_1.Chain.XDAI,
        },
        algorandParams: {
            algodApiKey: "e5b7d342b8a742be5e213540669b611bfd67465b754e7353eca8fd19b1efcffd",
            algodUri: "https://algorand-node.xp.network/",
            nonce: consts_1.Chain.ALGORAND,
            sendNftAppId: 458971166,
            algodPort: 443,
        },
        fuseParams: {
            middleware_uri,
            provider: new ethers_1.ethers.providers.JsonRpcProvider(consts_1.MainNetRpcUri.FUSE),
            minter_addr: "0xb4A252B3b24AF2cA83fcfdd6c7Fac04Ff9d45A7D",
            erc1155_addr: "0xAcE819D882CEEF314191DaD13D2Bf3731Df80988",
            erc721_addr: "0xE773Be36b35e7B58a9b23007057b5e2D4f6686a1",
            validators: EVM_VALIDATORS,
            nonce: consts_1.Chain.FUSE
        }
    });
})(ChainFactoryConfigs = exports.ChainFactoryConfigs || (exports.ChainFactoryConfigs = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZhY3RvcnkvZmFjdG9yaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLFlBQVk7QUFDWixzREFBOEI7QUFDOUIsc0NBQWdFO0FBQ2hFLG1DQUFnQztBQUVoQyxNQUFNLGNBQWMsR0FBRztJQUNyQiw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1QyxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCwrQ0FBK0M7Q0FDaEQsQ0FBQztBQUVGLE1BQU0sc0JBQXNCLEdBQUc7SUFDN0IsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0NBQzdDLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxvQ0FBb0MsQ0FBQztBQUU1RCxJQUFpQixtQkFBbUIsQ0EwT25DO0FBMU9ELFdBQWlCLG1CQUFtQjtJQUNyQiwyQkFBTyxHQUErQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELFlBQVksRUFBRTtZQUNaLFFBQVEsRUFBRSxzQkFBYSxDQUFDLE1BQU07WUFDOUIsY0FBYyxFQUNaLGdFQUFnRTtZQUNsRSxpQkFBaUIsRUFDZixnRUFBZ0U7WUFDbEUsSUFBSSxFQUFFLGNBQWM7WUFDcEIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFLGNBQWM7WUFDekIsVUFBVSxFQUFFO2dCQUNWLGdFQUFnRTtnQkFDaEUsZ0VBQWdFO2dCQUNoRSxnRUFBZ0U7Z0JBQ2hFLGdFQUFnRTtnQkFDaEUsZ0VBQWdFO2dCQUNoRSxnRUFBZ0U7Z0JBQ2hFLGdFQUFnRTthQUNqRTtZQUNELEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxVQUFVLEVBQUU7WUFDVixRQUFRLEVBQUUsSUFBSSxpQkFBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLHNC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