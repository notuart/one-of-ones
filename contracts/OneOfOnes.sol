// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract OneOfOnes is ERC721A, Ownable {
  mapping(uint256 => string) private _metadata;

  modifier tokenExists(uint256 tokenId) {
    require (_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    _;
  }

  function mint(string memory uri, address to) external onlyOwner {
    _metadata[currentIndex] = uri;
    _safeMint(to, 1);
  }

  function tokenURI(uint256 tokenId) public view virtual override tokenExists(tokenId) returns (string memory) {
    return _metadata[tokenId];
  }

  function setTokenURI(uint256 tokenId, string memory uri) public tokenExists(tokenId) onlyOwner {
    _metadata[tokenId] = uri;
  }
}