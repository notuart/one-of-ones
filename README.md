# About this project

This Solidity smart contract is made to mint your own NFTs using the gas efficient [ERC721A](https://github.com/chiru-labs/ERC721A) implementation.

## Installation

```sh

npm install --save-dev one-of-ones

```

## Usage

Once installed, you can use the contract in the library by importing it as follows:

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "one-of-ones/contracts/OneOfOnes.sol";

contract Metapond is OneOfOnes {
  constructor() ERC721A("Metapond", "M") {}
}
```

## Roadmap

- [ ] Add contract factory
- [x] Add metadata freeze functionality
- [x] Increase test coverage

See the [open issues](https://github.com/notuart/one-of-ones/issues) for a full list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Running tests locally

1. `npm install`
2. `npm run test`

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

- notu (owner) - [@notuart](https://twitter.com/notuart)

Project Link: [https://github.com/notuart/one-of-ones](https://github.com/notuart/one-of-ones)
