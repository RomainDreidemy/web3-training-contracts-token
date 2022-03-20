
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, World!");

  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();

  const RDToken = await hre.ethers.getContractFactory("RDToken");
  const rdToken = await RDToken.deploy("Romain Dreidemy Token", "RDT"); 
  
  await greeter.deployed();
  await token.deployed();
  await rdToken.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Token deployed to:", token.address);
  console.log("RDToken deployed to:", rdToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });