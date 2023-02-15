const hre = require("hardhat");
const { Contract, ethers } = require('ethers');
const axios = require('axios');

async function main() {


  const oracle = await hre.ethers.getContractFactory("Oracle");
  const _oracle = await oracle.deploy();

  await _oracle.deployed();

  console.log(
    "Oracle Contract Address :", _oracle.address
  );
  
  const user = await hre.ethers.getContractFactory("Contract2");
  const _user = await user.deploy(_oracle.address);

  await _user.deployed();

  console.log(
    "User Contract Address :", _user.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});