import { Balance } from "@elrondnetwork/erdjs/out";
import BigNumber from "bignumber.js";
import BN from "bn.js";

import {
  Account,
  connect,
  DEFAULT_FUNCTION_CALL_GAS,
  Near,
  keyStores,
  WalletConnection,
  Contract,
  KeyPair,
  InMemorySigner,
} from "near-api-js";

import {
  FinalExecutionOutcome,
  getTransactionLastResult,
} from "near-api-js/lib/providers";
import { Chain } from "../consts";
import { EvNotifier } from "../notifier";
import {
  ChainNonceGet,
  EstimateTxFees,
  FeeMargins,
  GetFeeMargins,
  GetProvider,
  MintNft,
  NftInfo,
  PreTransfer,
  TransferNftForeign,
  UnfreezeForeignNft,
  ValidateAddress,
  BalanceCheck,
} from "./chain";

type NearTxResult = [FinalExecutionOutcome, any];

export type NearParams = {
  readonly networkId: string;
  readonly nonce: number;
  readonly rpcUrl: string;
  readonly bridge: string;
  readonly xpnft: string;
  readonly feeMargin: FeeMargins;
  readonly notifier: EvNotifier;
  readonly walletUrl: string;
  readonly helperUrl: string;
};
export type NearNFT = {
  tokenId: string;
  contract: string;
};

export type Metadata = {
  title?: string;
  description?: string;
  media?: string;
  mediaHash: Uint8Array | null;
  issued_at: string | null;
  expires_at: string | null;
  starts_at: string | null;
  updated_at: string | null;
  extra?: string;
  reference: string | null;
  referenceHash: Uint8Array | null;
};

export interface NearMintArgs {
  contract: string;
  token_id: string;
  token_owner_id: string;
  metadata: Metadata;
}

interface BrowserMethods {
  connectWallet(): Promise<WalletConnection>;
  getContract(signer: Account, _contract: string): Promise<Contract>;
  getUserMinter(keypair: string, address: string): Promise<Near>;
}

export type NearHelper = ChainNonceGet &
  BalanceCheck &
  TransferNftForeign<Account, NearNFT, NearTxResult> &
  UnfreezeForeignNft<Account, NearNFT, NearTxResult> &
  MintNft<Account, NearMintArgs, NearTxResult> &
  EstimateTxFees<NearNFT> &
  Pick<PreTransfer<Account, NearNFT, NearTxResult>, "preTransfer"> &
  ValidateAddress & {
    XpNft: string;
    nftList(owner: Account, contract: string): Promise<NftInfo<NearNFT>[]>;
  } & GetFeeMargins &
  GetProvider<Near> &
  BrowserMethods;

export async function nearHelperFactory({
  networkId,
  bridge,
  rpcUrl,
  xpnft,
  feeMargin,
  notifier,
  walletUrl,
  helperUrl,
}: NearParams): Promise<NearHelper> {
  const near = await connect({
    nodeUrl: rpcUrl,
    networkId,
    headers: {},
  });

  const isApproved = async (
    account: Account,
    nft: NftInfo<NearNFT>
  ): Promise<boolean> => {
    const { tokenId: token_id, contract } = nft.native;
    const result = await account.functionCall({
      args: {
        token_id,
        approved_account_id: bridge,
        approval_id: null,
      },
      contractId: contract,
      methodName: "nft_is_approved",
    });
    const res = getTransactionLastResult(result) as boolean;
    return res;
  };

  return {
    async estimateValidateTransferNft(_to, _metadata, _mintWith) {
      return new BigNumber(0); // TODO
    },
    async estimateValidateUnfreezeNft(_to, _metadata, _mintWith) {
      return new BigNumber(0); // TODO
    },
    getNonce() {
      return Chain.NEAR;
    },
    async balance(address: string) {
      const res = (
        await new Account(near.connection, address).getAccountBalance()
      ).available;
      return new BigNumber(res);
    },
    async mintNft(owner, options) {
      const result = await owner.functionCall({
        contractId: options.contract,
        methodName: "nft_mint",
        args: {
          token_id: options.token_id,
          token_owner_id: options.token_owner_id,
          token_metadata: options.metadata,
        },
        attachedDeposit: new BN("10000000000000000000000"), // 0.01 Near
      });
      return [result, getTransactionLastResult(result)];
    },
    async nftList(owner, contract) {
      const result = await owner.functionCall({
        contractId: contract,
        methodName: "nft_tokens_for_owner",
        args: { account_id: owner.accountId },
      });
      const res = getTransactionLastResult(result) as any[];

      return res.map((r) => {
        return {
          native: {
            tokenId: r.token_id,
            contract,
          },
          collectionIdent: contract,
          uri: r.metadata.extra || r.metadata.media,
        };
      });
    },
    async preTransfer(sender, nft, _fee) {
      if (await isApproved(sender, nft)) {
        return undefined;
      }

      const result = await sender
        .functionCall({
          contractId: nft.native.contract,
          methodName: "nft_approve",
          args: {
            token_id: nft.native.tokenId,
            account_id: bridge,
            msg: "Approval for NFT Transfer via XP Network Multichain NFT Bridge",
          },
          attachedDeposit: new BN("1000000000000000000000"), // 0.001 Near
        })
        .catch((e) => {
          return e["transaction_outcome"]["id"];
        });
      return result;
    },
    XpNft: xpnft,
    async transferNftToForeign(
      sender,
      chain_nonce,
      to,
      id,
      txFees,
      mint_with,
      gasLimit
    ) {
      const result = await sender.functionCall({
        contractId: bridge,
        args: {
          token_id: id.native.tokenId,
          chain_nonce,
          to,
          amt: new BigNumber(txFees),
          mint_with,
          token_contract: id.native.contract,
        },
        methodName: "freeze_nft",
        attachedDeposit: new BN(txFees.toString()),
        gas: new BN(gasLimit?.toString() ?? DEFAULT_FUNCTION_CALL_GAS),
      });
      await notifier.notifyNear(result.transaction.hash);
      return [result, getTransactionLastResult(result)];
    },
    getFeeMargin() {
      return feeMargin;
    },
    getProvider() {
      return near;
    },
    async unfreezeWrappedNft(sender, to, id, txFees, nonce) {
      const result = await sender.functionCall({
        contractId: bridge,
        args: {
          token_id: id.native.tokenId,
          chain_nonce: parseInt(nonce),
          to,
          amt: parseInt(txFees.toString()),
          token_contract: id.native.contract,
        },
        methodName: "withdraw_nft",
        attachedDeposit: new BN(txFees.toString()),
        gas: DEFAULT_FUNCTION_CALL_GAS,
      });
      await notifier.notifyNear(result.transaction.hash);
      return [result, getTransactionLastResult(result)];
    },
    async validateAddress(adr) {
      try {
        await new Account(near.connection, adr).getAccountBalance();
        return true;
      } catch (e) {
        return false;
      }
    },

    async connectWallet() {
      if (typeof window === "undefined") {
        throw new Error("Browser method only");
      }
      const nearConnection = await connect({
        networkId,
        nodeUrl: rpcUrl,
        keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        headers: {},
        walletUrl,
        helperUrl,
      });
      const wc = new WalletConnection(nearConnection, "");
      return wc;
    },

    async getContract(signer: Account, _contract: string) {
      return new Contract(signer, _contract, {
        viewMethods: [],
        changeMethods: ["nft_mint"],
      });
    },

    async getUserMinter(keypair: string, address: string) {
      const keyStore = new keyStores.InMemoryKeyStore();
      const keyPair = KeyPair.fromString(keypair);
      keyStore.setKey(networkId, address, keyPair);

      const signer = new InMemorySigner(keyStore);

      const provider = await connect({
        headers: {},
        nodeUrl: rpcUrl,
        networkId,
        signer,
      });

      return provider;
    },
  };
}
