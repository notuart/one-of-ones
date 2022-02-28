const { expect } = require("chai");
const { ethers } = require("hardhat");

const decode = (base64) => JSON.parse(
  Buffer.from(base64.replace('data:application/json;base64,', ''), 'base64').toString(
    'ascii',
  ),
);

describe("NFT", function () {
  let contract;

  beforeEach(async function () {
    const factory = await ethers.getContractFactory("NFT");
    
    [owner, fren1, fren2, fren3, fren4, ...frens] = await ethers.getSigners();

    contract = await factory.deploy();
    await contract.deployed();
  })

  it("Should deploy subcontracts properly", async function () {
    expect(contract.address.charAt(1)).equals('x');
    expect(await contract.name()).equals("NFT");
    expect(await contract.symbol()).equals("NFT");
  });

  it("Should let the owner mint", async function () {
    const metadata = {
      name: 'My first ever NFT #1',
      description: 'You are unique and special', 
      image: 'ipfs://1'
    }

    let tx = await contract.connect(owner).mint(metadata, fren1.address);
    let receipt = await tx.wait();
    let tokenURI = await contract.tokenURI(1);

    const { name, description, image } = decode(tokenURI);

    expect(name).equals(metadata.name);
    expect(description).equals(metadata.description);
    expect(image).equals(metadata.image);
  });

  it("Should let the owner update a tokens metadata", async function () {
    const metadata = {
      name: 'My second NFT #2',
      description: 'Also unique and special', 
      image: 'ipfs://2'
    }

    let tx = await contract.connect(owner).mint(metadata, fren1.address);
    let receipt = await tx.wait();
    let tokenURI = await contract.tokenURI(1);

    const initial = decode(tokenURI);

    expect(initial.name).equals(metadata.name);
    expect(initial.description).equals(metadata.description);
    expect(initial.image).equals(metadata.image);

    const updates = {
      name: 'This is not really my second NFT #2',
      description: 'But it is unique and special', 
      image: 'ipfs://222'
    }

    tx = await contract.connect(owner).updateMetadata(1, updates);
    recept = await tx.wait();
    tokenURI = await contract.tokenURI(1);

    const updated = decode(tokenURI);

    expect(updated.name).equals(updates.name);
    expect(updated.description).equals(updates.description);
    expect(updated.image).equals(updates.image);
  });
});
