/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IToken, ITokenInterface } from "../../YieldLever.sol/IToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashBorrow",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class IToken__factory {
  static readonly abi = _abi;
  static createInterface(): ITokenInterface {
    return new utils.Interface(_abi) as ITokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IToken {
    return new Contract(address, _abi, signerOrProvider) as IToken;
  }
}
