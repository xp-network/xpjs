"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchangeRateRepo = exports.tronListNft = exports.moralisNftList = exports.elrondNftList = void 0;
const crypto_exchange_rate_1 = require("crypto-exchange-rate");
const xpnet_nft_list_1 = require("xpnet-nft-list");
function elrondNftList(proxy) {
    return xpnet_nft_list_1.nftListRepo(xpnet_nft_list_1.elrdNftListService(proxy), xpnet_nft_list_1.elrdRawTokenMapper(), xpnet_nft_list_1.mockChainIdentMapper());
}
exports.elrondNftList = elrondNftList;
function moralisNftList(server, appId, moralisSecret) {
    return xpnet_nft_list_1.nftListRepo(xpnet_nft_list_1.moralisNftListService({ serverUrl: server, appId, moralisSecret }), xpnet_nft_list_1.moralisNftMapper(), xpnet_nft_list_1.moralisChainIdMapper());
}
exports.moralisNftList = moralisNftList;
function tronListNft(tronWeb, tronScan, xpnftAddr) {
    return xpnet_nft_list_1.nftListRepo(xpnet_nft_list_1.trxNftListService(tronWeb, tronScan, xpnftAddr), xpnet_nft_list_1.ethNftJMapper(), xpnet_nft_list_1.mockChainIdentMapper());
}
exports.tronListNft = tronListNft;
function exchangeRateRepo(baseUrl) {
    const baseService = crypto_exchange_rate_1.NetworkModel.batchExchangeRateService(baseUrl);
    return crypto_exchange_rate_1.cachedExchangeRateRepo(crypto_exchange_rate_1.networkBatchExchangeRateRepo(baseService, crypto_exchange_rate_1.NetworkModel.exchangeRateDtoMapper()));
}
exports.exchangeRateRepo = exchangeRateRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYWN0b3J5L2NvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBSzhCO0FBQzlCLG1EQWV3QjtBQUl4QixTQUFnQixhQUFhLENBQUMsS0FBYTtJQUN6QyxPQUFPLDRCQUFXLENBQ2hCLG1DQUFrQixDQUFDLEtBQUssQ0FBQyxFQUN6QixtQ0FBa0IsRUFBRSxFQUNwQixxQ0FBb0IsRUFBRSxDQUN2QixDQUFDO0FBQ0osQ0FBQztBQU5ELHNDQU1DO0FBRUQsU0FBZ0IsY0FBYyxDQUM1QixNQUFjLEVBQ2QsS0FBYSxFQUNiLGFBQXNCO0lBRXRCLE9BQU8sNEJBQVcsQ0FDaEIsc0NBQXFCLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUNsRSxpQ0FBZ0IsRUFBRSxFQUNsQixxQ0FBb0IsRUFBRSxDQUN2QixDQUFDO0FBQ0osQ0FBQztBQVZELHdDQVVDO0FBRUQsU0FBZ0IsV0FBVyxDQUN6QixPQUFnQixFQUNoQixRQUFnQixFQUNoQixTQUFpQjtJQUVqQixPQUFPLDRCQUFXLENBQ2hCLGtDQUFpQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQy9DLDhCQUFhLEVBQUUsRUFDZixxQ0FBb0IsRUFBRSxDQUN2QixDQUFDO0FBQ0osQ0FBQztBQVZELGtDQVVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsT0FBZTtJQUM5QyxNQUFNLFdBQVcsR0FBRyxtQ0FBWSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5FLE9BQU8sNkNBQXNCLENBQzNCLG1EQUE0QixDQUMxQixXQUFXLEVBQ1gsbUNBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUNyQyxDQUNGLENBQUM7QUFDSixDQUFDO0FBVEQsNENBU0MifQ==