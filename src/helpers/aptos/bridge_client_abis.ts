export const MAINNET_BRIDGE_ABIS = [
  // ../build/aptos-bridge/abis/bridge/initialize.abi
  "010a696e697469616c697a65f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d066272696467650000010967726f75705f6b65790601",
  // ../build/aptos-bridge/abis/bridge/pause.abi
  "01057061757365f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d0662726964676500000209616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/unpause.abi
  "0107756e7061757365f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d0662726964676500000209616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/update_group_key.abi
  "01107570646174655f67726f75705f6b6579f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d066272696467650000030d6e65775f67726f75705f6b6579060109616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/validate_whitelist.abi
  "011276616c69646174655f77686974656c697374f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d0662726964676500000412636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670009616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/validate_blacklist.abi
  "011276616c69646174655f626c61636b6c697374f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d0662726964676500000412636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670009616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/validate_withdraw_fees.abi
  "011676616c69646174655f77697468647261775f66656573f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d0662726964676500000302746f0409616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/validate_tranfer_nft.abi
  "011576616c69646174655f7472616e736665725f6e6674f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d0662726964676500000f0a636f6c6c656374696f6e07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700046e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000b6465736372697074696f6e07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700076d6178696d756d020375726907000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670015726f79616c74795f70617965655f61646472657373041a726f79616c74795f706f696e74735f64656e6f6d696e61746f720218726f79616c74795f706f696e74735f6e756d657261746f72020e6d75746174655f73657474696e6706000d70726f70657274795f6b6579730607000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000f70726f70657274795f76616c7565730606010e70726f70657274795f74797065730607000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670002746f0409616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/withdraw_nft.abi
  "010c77697468647261775f6e6674f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d0662726964676500000812636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000a746f6b656e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e02057072696365020b636861696e5f6e6f6e63650202746f07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700096d696e745f7769746807000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700",
  // ../build/aptos-bridge/abis/bridge/validate_burn_nft.abi
  "011176616c69646174655f6275726e5f6e6674f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d0662726964676500000612636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000a746f6b656e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e0209616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/freeze_nft.abi
  "010a667265657a655f6e6674f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d0662726964676500000812636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000a746f6b656e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e02057072696365020b636861696e5f6e6f6e63650202746f07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700096d696e745f7769746807000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700",
  // ../build/aptos-bridge/abis/bridge/validate_unfreeze_nft.abi
  "011576616c69646174655f756e667265657a655f6e6674f1528ec9c413e37f0ce63eb699fa6c7521b925ff4857b2c95e857e43078c916d0662726964676500000712636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000a746f6b656e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e0202746f0409616374696f6e5f696403097369676e61747572650601",
];

export const TESTNET_BRIDGE_ABIS = [
  // ../build/aptos-bridge/abis/bridge/initialize.abi
  "010a696e697469616c697a652b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d58066272696467650000010967726f75705f6b65790601",
  // ../build/aptos-bridge/abis/bridge/pause.abi
  "010570617573652b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d580662726964676500000209616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/unpause.abi
  "0107756e70617573652b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d580662726964676500000209616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/update_group_key.abi
  "01107570646174655f67726f75705f6b65792b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d58066272696467650000030d6e65775f67726f75705f6b6579060109616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/validate_whitelist.abi
  "011276616c69646174655f77686974656c6973742b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d580662726964676500000412636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670009616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/validate_blacklist.abi
  "011276616c69646174655f626c61636b6c6973742b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d580662726964676500000412636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670009616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/validate_withdraw_fees.abi
  "011676616c69646174655f77697468647261775f666565732b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d580662726964676500000302746f0409616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/validate_tranfer_nft.abi
  "011576616c69646174655f7472616e736665725f6e66742b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d580662726964676500000c0a636f6c6c656374696f6e07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700046e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000b6465736372697074696f6e07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700076d6178696d756d020375726907000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670015726f79616c74795f70617965655f61646472657373041a726f79616c74795f706f696e74735f64656e6f6d696e61746f720218726f79616c74795f706f696e74735f6e756d657261746f72020e6d75746174655f73657474696e67060002746f0409616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/withdraw_nft.abi
  "010c77697468647261775f6e66742b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d580662726964676500000812636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000a746f6b656e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e02057072696365020b636861696e5f6e6f6e63650202746f07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700096d696e745f7769746807000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700",
  // ../build/aptos-bridge/abis/bridge/freeze_nft.abi
  "010a667265657a655f6e66742b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d580662726964676500000812636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000a746f6b656e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e02057072696365020b636861696e5f6e6f6e63650202746f07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700096d696e745f7769746807000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700",
  // ../build/aptos-bridge/abis/bridge/validate_unfreeze_nft.abi
  "011576616c69646174655f756e667265657a655f6e66742b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d580662726964676500000712636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000a746f6b656e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e0202746f0409616374696f6e5f696403097369676e61747572650601",
  // ../build/aptos-bridge/abis/bridge/create_collection.abi
  "01116372656174655f636f6c6c656374696f6e2b9c2009290f6a291df678bca9b03aa55f909cbdbbcc215d4868f5bd8e5a7d58066272696467650000050f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670016636f6c6c656374696f6e5f6465736372697074696f6e07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000e636f6c6c656374696f6e5f75726907000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700076d6178696d756d020e6d75746174655f73657474696e670600",
];

export const STAGING_BRIDGE_ABIS = [
  "010a696e697469616c697a65813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec37066272696467650000010967726f75705f6b65790601",
  "01057061757365813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec370662726964676500000209616374696f6e5f696403097369676e61747572650601",
  "0107756e7061757365813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec370662726964676500000209616374696f6e5f696403097369676e61747572650601",
  "01107570646174655f67726f75705f6b6579813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec37066272696467650000030d6e65775f67726f75705f6b6579060109616374696f6e5f696403097369676e61747572650601",
  "011276616c69646174655f77686974656c697374813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec370662726964676500000412636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670009616374696f6e5f696403097369676e61747572650601",
  "011276616c69646174655f626c61636b6c697374813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec370662726964676500000412636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670009616374696f6e5f696403097369676e61747572650601",
  "011676616c69646174655f77697468647261775f66656573813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec370662726964676500000302746f0409616374696f6e5f696403097369676e61747572650601",
  "011576616c69646174655f7472616e736665725f6e6674813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec370662726964676500000c0a636f6c6c656374696f6e07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700046e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000b6465736372697074696f6e07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700076d6178696d756d020375726907000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e670015726f79616c74795f70617965655f61646472657373041a726f79616c74795f706f696e74735f64656e6f6d696e61746f720218726f79616c74795f706f696e74735f6e756d657261746f72020e6d75746174655f73657474696e67060002746f0409616374696f6e5f696403097369676e61747572650601",
  "010c77697468647261775f6e6674813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec370662726964676500000812636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000a746f6b656e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e02057072696365020b636861696e5f6e6f6e63650202746f07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700096d696e745f7769746807000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700",
  "010a667265657a655f6e6674813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec370662726964676500000812636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000a746f6b656e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e02057072696365020b636861696e5f6e6f6e63650202746f07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700096d696e745f7769746807000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700",
  "011576616c69646174655f756e667265657a655f6e6674813d070ca33bf08223e957257c25cb66072fa8960b0af4810c2e78990126ec370662726964676500000712636f6c6c656374696f6e5f63726561746f72040f636f6c6c656374696f6e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67000a746f6b656e5f6e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e0202746f0409616374696f6e5f696403097369676e61747572650601",
];
