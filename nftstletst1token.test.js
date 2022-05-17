// Right click on the script name and hit "Run" to execute
//const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Nftstletst1Token", function () {
   it("test updating value", async function () {
    const Nftstletst1Token = await ethers.getContractFactory("Nftstletst1Token");
    const nftstletst1Token = await Nftstletst1Token.deploy();
    await nftstletst1Token.deployed();
    const nftstletst1Token2 = await ethers.getContractAt("Nftstletst1Token", nftstletst1Token.address);
    const setValue = await nftstletst1Token2.awardItem("0x3BB55ff9eFb99Aa1BDa5E7559B52541dc03A9D91","https://stlenft.com/CLODY/CL0001.json");
    await setValue.wait();
    console.log('Nftstletst1Token id:'+ setValue)
  });
});

