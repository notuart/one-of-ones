// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "../OneOfOnes.sol";

contract NFT is OneOfOnes {
  constructor() ERC721A("NFT", "NFT") {}
}