require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { SEPOLIA_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.22",
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
