const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT", function () {
  it("Should work", async function () {
    const factory = await ethers.getContractFactory("NFT");
    
    [owner, fren1, fren2, fren3, fren4, ...frens] = await ethers.getSigners();

    const contract = await factory.deploy();
    await contract.deployed();

    let tx = await contract.connect(owner)
      .mint("ipfs://0", fren1.address);

    // wait until the transaction is mined
    await tx.wait();

    tx = await contract.connect(owner)
      .mint("ipfs://1", fren2.address);

    // wait until the transaction is mined
    await tx.wait();

    expect(await contract.tokenURI(0)).to.equal("ipfs://0");
    expect(await contract.tokenURI(1)).to.equal("ipfs://1");
  });
});
