require("dotenv").config()
const HDWalletProvider = require("@truffle/hdwallet-provider")
const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
  networks: {
    polygon: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys,
          `wss://rpc-mainnet.maticvigil.com/ws/v1/${process.env.INFURA_API_KEY}`
        )
      },
      network_id: 137, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false, // Skip dry run before migrations? (default: false for public nets )
    },
    mumbai: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys,
          `wss://rpc-mumbai.maticvigil.com/ws/v1/${process.env.INFURA_API_KEY}`
        )
      },
      network_id: 80001, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false, // Skip dry run before migrations? (default: false for public nets )
    },
  },
  mocha: {
    timeout: 100000,
  },
  compilers: {
    solc: {
      version: "0.8.7", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        optimizer: {
          enabled: false,
          runs: 200,
        },
        //  evmVersion: "byzantium"
      },
    },
  },
  contracts_directory: "./contracts",
  contracts_build_directory: "./src/abis",
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    polygonscan: process.env.POLYGONSCAN_API_KEY,
  },
}
