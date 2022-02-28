// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import { Base64 } from 'base64-sol/base64.sol';

abstract contract OneOfOnes is ERC721A, Ownable {
  // Metadata status
  bool frozen = false;

  // Metadata storage
  mapping(uint256 => Metadata) private _metadata;

  struct Metadata {
    string name;
    string description;
    string image;
  }

  // constructor(string memory name_, string memory symbol_) override {
  //   _name = name_;
  //   _symbol = symbol_;
  //   _currentIndex = _startTokenId();
  // }
  // constructor() ERC721A("OneOfOnes", "OOO") {}

  // constructor(string memory name_, string memory symbol_) {
  //   _name = name_;
  //   _symbol = symbol_;
  //   _currentIndex = _startTokenId();
  // }
  
  modifier tokenExists(uint256 tokenId) {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    _;
  }

  function _startTokenId() internal view virtual override returns (uint256) {
    return 1;
  }

  function mint(string memory name, string memory description, string memory image, address recipient) external onlyOwner {
    _metadata[_currentIndex] = Metadata(name, description, image);
    _safeMint(recipient, 1);
  }

  function tokenURI(uint256 tokenId) public view virtual override tokenExists(tokenId) returns (string memory) {
    Metadata memory metadata = _metadata[tokenId];

    return string(
      abi.encodePacked(
        'data:application/json;base64,',
        Base64.encode(
          bytes(
            // abi.encodePacked('{"name":"', metadata.name, '", "description":"', metadata.description, '", "image": "', 'data:image/svg+xml;base64,', image, '"}')
            abi.encodePacked('{"name":"', metadata.name, '", "description":"', metadata.description, '", "image": "', metadata.image, '"}')
          )
        )
      )
    );
  }

  // function setTokenURI(uint256 tokenId, string memory uri) public tokenExists(tokenId) onlyOwner {
  //   require(!frozen, "ERC721Metadata: metadata was frozen");
  //   _metadata[tokenId] = uri;
  // }
}