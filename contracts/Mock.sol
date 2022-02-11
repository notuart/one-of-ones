//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./OneOfOnes.sol";

contract Mock is OneOfOnes {
    constructor() ERC721A("Mock", "M") {}
}
