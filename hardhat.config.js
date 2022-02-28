require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

// npx hardhat run scripts/deploy.js --network rinkeby
// Contract deployed to: 0xF4c038360C1931b357996ddA45C0E69B49A520eD
// Contract deployed to: 0x6010CC4208a45AF5da36bF44500911C4B2E99742
// npx hardhat verify --network rinkeby 0xF4c038360C1931b357996ddA45C0E69B49A520eD
// https://rinkeby.etherscan.io/address/0xF4c038360C1931b357996ddA45C0E69B49A520eD#code
// npx hardhat verify --network rinkeby 0x6010CC4208a45AF5da36bF44500911C4B2E99742
// https://rinkeby.etherscan.io/address/0x6010CC4208a45AF5da36bF44500911C4B2E99742#code

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    gasPrice: 100,
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mainnet: {
      url: process.env.MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};