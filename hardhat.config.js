require("@nomiclabs/hardhat-waffle");

const accountPrivateKey = '672751eba2b1b930e0b8dda5114aae62504da44d7e8fc37bf03443b7d8208873';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/2739b829153945b0baa4d99dffe6b4e9",
      accounts: [`0x${accountPrivateKey}`]
    }
  }
};
