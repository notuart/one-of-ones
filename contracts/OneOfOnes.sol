// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract OneOfOnes is ERC721A, Ownable {
  mapping(uint256 => string) private _metadata;

  function mint(string memory uri, address to) external onlyOwner {
    setTokenURI(currentIndex, uri);
    _safeMint(to, 1);
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require (_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    return _metadata[tokenId];
  }

  function setTokenURI(uint256 tokenId, string memory uri) public onlyOwner {
    _metadata[tokenId] = uri;
  }
}