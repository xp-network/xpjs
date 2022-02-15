import { ChainParams } from ".";
//@ts-ignore
import TronWeb from "tronweb";
import { Chain, MainNetRpcUri, TestNetRpcUri } from "../consts";
import { ethers } from "ethers";
import { TezosToolkit } from "@taquito/taquito";

const EVM_VALIDATORS = [
  "0xffa74a26bf87a32992bb4be080467bb4a8019e00",
  "0x837b2eb764860b442c971f98f505e7c5f419edd7",
  "0x9671ce5a02eb53cf0f2cbd220b34e50c39c0bf23",
  "0x90e79cc7a06dbd227569920a8c4a625f630d77f4",
  "0xdc80905cafeda39cb19a566baeef52472848e82f",
  "0x77745cd585798e55938940e3d4dd0fd7cde7bdd6",
  "0xc2a29b4e9fa71e9033a52611544403241c56ac5e",
];

const EVM_TESTNET_VALIDATORS = ["0x63A0bC7286e80A3a46D5113e1C059e7a1e14e0fc"];

const middleware_uri = "https://notifier.xp.network";

export namespace ChainFactoryConfigs {
  export const TestNet: () => Partial<ChainParams> = () => ({
    elrondParams: {
      node_uri: TestNetRpcUri.ELROND,
      minter_address:
        "erd1qqqqqqqqqqqqqpgq3y98dyjdp72lwzvd35yt4f9ua2a3n70v0drsfycvu8",
      esdt_swap_address:
        "erd1qqqqqqqqqqqqqpgq5vuvac70kn36yk4rvf9scr6p8tlu23220drsfgszfy",
      esdt: "XPNET-738176",
      esdt_nft: "XPNFT-cb7482",
      esdt_swap: "WEGLD-5f1f8d",
      nonce: 2,
    },
    tronParams: {
      provider: new TronWeb({ fullHost: TestNetRpcUri.TRON }),
      middleware_uri,
      erc1155_addr: "41b9bd4547c91cb23ba546bcdc958d4807e2179c7c",
      minter_addr: "41cecf8ffbed6433c1cae2fe196925109aebc726f2",
      erc721_addr: "41226a324faa855cf0e4774c682c9d772b72dd811e",
      validators: EVM_TESTNET_VALIDATORS,
      nonce: Chain.TRON,
    },
    avalancheParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.AVALANCHE),
      minter_addr: "0x9a287810bA8F0564DaDd9F2Ea9B7B2459497416B",
      erc1155_addr: "0x80653c90614155633252d32698164DBbBC421782",
      erc721_addr: "0x3F51015C76D7A64514E9B86D500bBFD44F95bdE9",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.AVALANCHE,
    },
    polygonParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.POLYGON),
      minter_addr: "0x9a287810bA8F0564DaDd9F2Ea9B7B2459497416B",
      erc1155_addr: "0x80653c90614155633252d32698164DBbBC421782",
      erc721_addr: "0x3F51015C76D7A64514E9B86D500bBFD44F95bdE9",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.POLYGON,
    },
    fantomParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.FANTOM),
      minter_addr: "0x9a287810bA8F0564DaDd9F2Ea9B7B2459497416B",
      erc1155_addr: "0x80653c90614155633252d32698164DBbBC421782",
      erc721_addr: "0x3F51015C76D7A64514E9B86D500bBFD44F95bdE9",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.FANTOM,
    },
    bscParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.BSC),
      minter_addr: "0x9a287810bA8F0564DaDd9F2Ea9B7B2459497416B",
      erc1155_addr: "0x80653c90614155633252d32698164DBbBC421782",
      erc721_addr: "0x3F51015C76D7A64514E9B86D500bBFD44F95bdE9",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.BSC,
    },
    celoParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.CELO),
      minter_addr: "0x9a287810bA8F0564DaDd9F2Ea9B7B2459497416B",
      erc1155_addr: "0x80653c90614155633252d32698164DBbBC421782",
      erc721_addr: "0x3F51015C76D7A64514E9B86D500bBFD44F95bdE9",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.CELO,
    },
    harmonyParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.HARMONY),
      minter_addr: "0x9a287810bA8F0564DaDd9F2Ea9B7B2459497416B",
      erc1155_addr: "0x80653c90614155633252d32698164DBbBC421782",
      erc721_addr: "0x3F51015C76D7A64514E9B86D500bBFD44F95bdE9",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.HARMONY,
    },
    ropstenParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.ROPSTEN),
      minter_addr: "0x9a287810bA8F0564DaDd9F2Ea9B7B2459497416B",
      erc1155_addr: "0x80653c90614155633252d32698164DBbBC421782",
      erc721_addr: "0x3F51015C76D7A64514E9B86D500bBFD44F95bdE9",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.ETHEREUM,
    },
    xDaiParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.XDAI),
      minter_addr: "0x9a287810bA8F0564DaDd9F2Ea9B7B2459497416B",
      erc1155_addr: "0x80653c90614155633252d32698164DBbBC421782",
      erc721_addr: "0x3F51015C76D7A64514E9B86D500bBFD44F95bdE9",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.XDAI,
    },
    algorandParams: {
      algodApiKey:
        "e5b7d342b8a742be5e213540669b611bfd67465b754e7353eca8fd19b1efcffd",
      algodUri: "https://algorand-node.xp.network/",
      algoIndexer: "https://algoexplorerapi.io/idx2",
      nonce: Chain.ALGORAND,
      sendNftAppId: 458971166,
      algodPort: 443,
    },
    uniqueParams: {
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.UNIQUE),
      nonce: Chain.UNIQUE,
      erc1155_addr: "0x9cdda01E00A5A425143F952ee894ff99B5F7999F",
      erc721_addr: "0xeBCDdF17898bFFE81BCb3182833ba44f4dB25525",
      minter_addr: "0x8CEe805FE5FA49e81266fcbC27F37D85062c1707",
      erc1155Minter: "string",
      erc721Minter: "string",
      middleware_uri,
    },
    tezosParams: {
      bridgeAddress: "KT1MRYxBimYh1PUt3LBhEAmvr7YMK2L7kqCL",
      middlewareUri: middleware_uri,
      Tezos: new TezosToolkit(TestNetRpcUri.TEZOS),
      xpnftAddress: "KT1F7THd96y39MYKkTXmLyWkDZQ3H6QgubLh",
      validators: [
        "tz1e4QByQTYQyj98cBiM42hejkMWB2Pg6iXg",
        "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
        "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6",
      ],
    },
    velasParams: {
      middleware_uri,
      erc1155_addr: "0x9a287810bA8F0564DaDd9F2Ea9B7B2459497416B",
      erc721_addr: "0x80653c90614155633252d32698164DBbBC421782",
      minter_addr: "0x3F51015C76D7A64514E9B86D500bBFD44F95bdE9",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.VELAS,
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.VELAS),
    },
    iotexParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(TestNetRpcUri.IOTEX),
      minter_addr: "0x0000000000000000000000000000000000000000",
      erc1155_addr: "0x0000000000000000000000000000000000000000",
      erc721_addr: "0x0000000000000000000000000000000000000000",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.IOTEX,
    },
  });

  export const MainNet: () => Partial<ChainParams> = () => ({
    elrondParams: {
      node_uri: MainNetRpcUri.ELROND,
      minter_address:
        "erd1qqqqqqqqqqqqqpgq98ufyktqukxqw79f7n22sr3u6n05u7d7p7tqmzhv32",
      esdt_swap_address:
        "erd1qqqqqqqqqqqqqpgqgc9vfqcdqw0ucu602elf0lt4tysfmxpep7tqhrrr9x",
      esdt: "XPNET-738176",
      esdt_nft: "XPNFT-676422",
      esdt_swap: "WEGLD-071de0",
      nonce: Chain.ELROND,
    },
    tronParams: {
      provider: new TronWeb({ fullHost: MainNetRpcUri.TRON }),
      middleware_uri,
      erc1155_addr: "TSg3nSjuSuVf5vEk6f2WwM9Ph8bEaNNz9B",
      minter_addr: "TMx1nCzbK7tbBinLh29CewahpbR1k64c8E",
      erc721_addr: "TRON",
      nonce: Chain.TRON,
      validators: EVM_VALIDATORS,
    },
    avalancheParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.AVALANCHE),
      erc721Minter: "0x9b2bACF4E69c81EF4EF42da84872aAC39ce7EC62",
      erc1155Minter: "0x7E8493F59274651Cc0919feCf12E6A77153cdA72",
      erc1155_addr: "0x73E8deFC951D228828da35Ff8152f25c1e5226fa",
      erc721_addr: "0x7bf2924985CAA6192D721B2B9e1109919aC6ff58",
      minter_addr: "0xC254a8D4eF5f825FD31561bDc69551ed2b8db134",
      nonce: Chain.AVALANCHE,
    },
    polygonParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.POLYGON),
      erc721Minter: "0x7E8493F59274651Cc0919feCf12E6A77153cdA72",
      erc1155Minter: "0x73E8deFC951D228828da35Ff8152f25c1e5226fa",
      erc1155_addr: "0x7bf2924985CAA6192D721B2B9e1109919aC6ff58",
      erc721_addr: "0xC254a8D4eF5f825FD31561bDc69551ed2b8db134",
      minter_addr: "0x14CAB7829B03D075c4ae1aCF4f9156235ce99405",
      nonce: Chain.POLYGON,
    },
    fantomParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.FANTOM),
      erc721Minter: "0xC81D46c6F2D59182c5A64FD5C372266c98985AdF",
      erc1155Minter: "0x146a99Ff19ece88EC87f5be03085cA6CD3163E15",
      erc1155_addr: "0xD87755CCeaab0edb28b3f0CD7D6405E1bB827B65",
      erc721_addr: "0xF5e792c1e8E626a4496D580b8c2b4d51bF80eFB7",
      minter_addr: "0xC0D56171C798F9508CF39B25f19826B699F16693",
      nonce: Chain.FANTOM,
    },
    bscParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.BSC),
      erc721Minter: "0xa66dA346C08dD77bfB7EE5E68C45010B6F2538ff",
      erc1155Minter: "0xF5e0c79CB0B7e7CF6Ad2F9779B01fe74F958964a",
      erc1155_addr: "0x3F888c0Ee72943a3Fb1c169684A9d1e8DEB9f537",
      erc721_addr: "0x0cC5F00e673B0bcd1F780602CeC6553aec1A57F0",
      minter_addr: "0x0B7ED039DFF2b91Eb4746830EaDAE6A0436fC4CB",
      nonce: Chain.BSC,
    },
    celoParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.CELO),
      minter_addr: "string",
      erc1155_addr: "string",
      erc721_addr: "string",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.CELO,
    },
    harmonyParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.HARMONY),
      minter_addr: "string",
      erc1155_addr: "string",
      erc721_addr: "string",
      erc1155Minter: "string",
      erc721Minter: "string",
      nonce: Chain.HARMONY,
    },
    ropstenParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.ETHEREUM),
      minter_addr: "0x1cC24128C04093d832D4b50609e182ed183E1688",
      erc1155_addr: "0x041AE550CB0e76a3d048cc2a4017BbCB74756b43",
      erc721_addr: "0x32E8854DC2a5Fd7049DCF10ef2cb5f01300c7B47",
      erc1155Minter: "0xca8E2a118d7674080d71762a783b0729AadadD42",
      erc721Minter: "0xF547002799955812378137FA30C21039E69deF05",
      nonce: Chain.ETHEREUM,
    },
    xDaiParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.XDAI),
      erc721Minter: "0x82A7d50A0030935808dAF6e5f0f06645866fb7Bb",
      erc1155Minter: "0xFEeD85607C1fbc2f30EAc13281480ED6265e121E",
      erc1155_addr: "0xDcAA2b071c1851D8Da43f85a34a5A57d4Fa93A1A",
      erc721_addr: "0x1358844f14feEf4D99Bc218C9577d1c7e0Cb2E89",
      minter_addr: "0x81e1Fdad0658b69914801aBaDA7Aa0Abb31653E5",
      nonce: Chain.XDAI,
    },
    algorandParams: {
      algodApiKey:
        "e5b7d342b8a742be5e213540669b611bfd67465b754e7353eca8fd19b1efcffd",
      algodUri: "https://algorand-node.xp.network/",
      nonce: Chain.ALGORAND,
      sendNftAppId: 458971166,
      algodPort: 443,
    },
    fuseParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.FUSE),
      erc721Minter: "0xC81D46c6F2D59182c5A64FD5C372266c98985AdF",
      erc1155Minter: "0x146a99Ff19ece88EC87f5be03085cA6CD3163E15",
      erc1155_addr: "0xD87755CCeaab0edb28b3f0CD7D6405E1bB827B65",
      erc721_addr: "0xF5e792c1e8E626a4496D580b8c2b4d51bF80eFB7",
      minter_addr: "0xC0D56171C798F9508CF39B25f19826B699F16693",
      nonce: Chain.FUSE,
    },
    tezosParams: {
      bridgeAddress: "KT1B2zBPLVe51oXeuBJ8c7p2vHhi37jGxGHR",
      middlewareUri: middleware_uri,
      Tezos: new TezosToolkit(MainNetRpcUri.TEZOS),
      xpnftAddress: "KT1FxthB8GQvT7HnuczSp1qJk4w7dR5umKrx",
      validators: [
        "tz1bxXSUcu1PqceWBw1zwc4zMRQuSLpbQ5VX",
        "tz1VBF2LXnnnqKqKmTQqdESGx91kVLKyZMv4",
        "tz1hMBJzUouzXYRk3mpdVi2QHY2gP594Kk2G",
      ],
    },
    velasParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.VELAS),
      erc721Minter: "0x7bf2924985CAA6192D721B2B9e1109919aC6ff58",
      erc1155Minter: "0xC254a8D4eF5f825FD31561bDc69551ed2b8db134",
      erc1155_addr: "0x14CAB7829B03D075c4ae1aCF4f9156235ce99405",
      erc721_addr: "0x2496b44516c8639dA00E8D12ccE64862e3760190",
      minter_addr: "0x93239b1CF8CAd847f387735876EdBa7D75ae4f7A",
      nonce: Chain.VELAS,
    },
    iotexParams: {
      middleware_uri,
      provider: new ethers.providers.JsonRpcProvider(MainNetRpcUri.IOTEX),
      minter_addr: "0xD6939f722B977afd7DD934A31bc94d08d4ea4336",
      erc1155_addr: "0xC0D56171C798F9508CF39B25f19826B699F16693",
      erc721_addr: "0xc45759e51CdDBa46db4D1becC8B8Bcbe5d4a9bB4",
      erc721Minter: "0xD87755CCeaab0edb28b3f0CD7D6405E1bB827B65",
      erc1155Minter: "0xF5e792c1e8E626a4496D580b8c2b4d51bF80eFB7",
      nonce: Chain.IOTEX,
    },
  });
}
