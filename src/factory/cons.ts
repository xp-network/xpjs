import {
  BatchExchangeRateRepo,
  cachedExchangeRateRepo,
  ExchangeRateRepo,
  networkBatchExchangeRateRepo,
  NetworkModel,
} from "crypto-exchange-rate";

import { NftInfo, FullChain } from "..";

import { CHAIN_INFO, ChainType } from "../consts";

export const _headers = {
  "Content-Type": "application/json",
  Accept: "*/*",
};

export function exchangeRateRepo(
  baseUrl: string
): ExchangeRateRepo & BatchExchangeRateRepo {
  const baseService = NetworkModel.batchExchangeRateService(baseUrl);

  return cachedExchangeRateRepo(
    networkBatchExchangeRateRepo(
      baseService,
      NetworkModel.exchangeRateDtoMapper()
    )
  );
}

export function getDefaultContract<SignerT, RawNftF, Resp, RawNftT>(
  nft: NftInfo<RawNftF>,
  fromChain: FullChain<SignerT, RawNftT, Resp>,
  toChain: FullChain<SignerT, RawNftT, Resp>
): string | undefined {
  const defaultMintError = new Error(
    `Transfer has been canceled. The NFT you are trying to send will be minted with a default NFT collection`
  );

  const from = fromChain.getNonce();
  const to = toChain.getNonce();

  const fromType = CHAIN_INFO.get(from)?.type;
  const toType = CHAIN_INFO.get(to)?.type;

  const contract =
    "contractType" in nft.native &&
    //@ts-ignore contractType is checked
    nft.native.contractType === "ERC1155" &&
    toChain.XpNft1155
      ? toChain.XpNft1155
      : toChain.XpNft;

  if (
    typeof window !== "undefined" &&
    (/(allowDefaultMint=true)/.test(window.location.search) ||
      /testnet/.test(window.location.pathname))
  ) {
    return contract;
  }

  /*if (fromType === ChainType.EVM && toType === ChainType.EVM) {
    throw defaultMintError;
  }*/

  if (
    (fromType === ChainType.EVM && toType === ChainType.ELROND) ||
    (fromType === ChainType.ELROND && toType === ChainType.EVM)
  ) {
    throw defaultMintError;
  }

  if (
    (fromType === ChainType.EVM && toType === ChainType.TEZOS) ||
    (fromType === ChainType.TEZOS && toType === ChainType.EVM)
  ) {
    throw defaultMintError;
  }

  return contract;
}
