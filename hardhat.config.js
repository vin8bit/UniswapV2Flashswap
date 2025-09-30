require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** 
 * Hardhat User Configuration
 * --------------------------
 * This annotation ensures proper TypeScript type checking and IntelliSense support 
 * by importing the HardhatUserConfig type from the Hardhat config module. 
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },

      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: `${ process.env.MAIINETFORK_RPC_URL_ALCHEMY }`, 
        blockNumber: 14390000
      }
    }
  }
};
