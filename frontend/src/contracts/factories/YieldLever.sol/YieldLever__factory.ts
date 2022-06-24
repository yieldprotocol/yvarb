/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  YieldLever,
  YieldLeverInterface,
} from "../../YieldLever.sol/YieldLever";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
      {
        internalType: "uint128",
        name: "base",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "ink",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "art",
        type: "uint128",
      },
    ],
    name: "doClose",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "investAmount",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "borrowAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "maxFyAmount",
        type: "uint128",
      },
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
    ],
    name: "doInvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "ink",
        type: "uint128",
      },
    ],
    name: "doRepay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "baseAmount",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "borrowAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "maxFyAmount",
        type: "uint128",
      },
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
    ],
    name: "invest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "ink",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "art",
        type: "uint128",
      },
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
    ],
    name: "unwind",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405163095ea7b360e01b815273a354f35829ae975e850e23e9615b11da1b3dc4de6004820152600019602482015273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb489063095ea7b3906044016020604051808303816000875af115801561007e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100a291906100a8565b506100d1565b6000602082840312156100ba57600080fd5b815180151581146100ca57600080fd5b9392505050565b611513806100e06000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806347b348451461005c57806350bf94d7146100715780636e6bf1f414610084578063d238b43314610097578063fcd064cf146100aa575b600080fd5b61006f61006a366004610f0f565b6100bd565b005b61006f61007f366004610f77565b610213565b61006f610092366004610fbf565b6104c8565b61006f6100a5366004611046565b610780565b61006f6100b83660046110bf565b610c40565b604051636e553f6560e01b81526004810185905273403ae7384e89b086ea2935d5fafed07465242b38602482015260009073a354f35829ae975e850e23e9615b11da1b3dc4de90636e553f65906044016020604051808303816000875af115801561012c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101509190611107565b6040516315bf1a8f60e31b81526001600160a01b0319841660048201527332e4c68b3a4a813b710595aeba7f6b7604ab9c1560248201526001600160801b038083166044830152808716606483015285166084820152909150736cb18ff2a33e981d1e38a663ca056c0a5265066a9063adf8d4789060a4016020604051808303816000875af11580156101e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020b9190611120565b505050505050565b736cb18ff2a33e981d1e38a663ca056c0a5265066a6324bd54b484306102388561115a565b6040516001600160e01b031960e086901b1681526001600160a01b031990931660048401526001600160a01b039091166024830152600f0b60448201526001600160801b03851660648201526084016020604051808303816000875af11580156102a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ca9190611120565b5073a354f35829ae975e850e23e9615b11da1b3dc4de6001600160a01b0316633ccfd60b6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561031f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103439190611107565b5060405163a9059cbb60e01b81527332e4c68b3a4a813b710595aeba7f6b7604ab9c1560048201526024810183905273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb489063a9059cbb906044016020604051808303816000875af11580156103b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d49190611189565b506040516370a0823160e01b815230600482015273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb489063a9059cbb90869083906370a0823190602401602060405180830381865afa15801561042e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104529190611107565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af115801561049d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c19190611189565b5050505050565b736cb18ff2a33e981d1e38a663ca056c0a5265066a63441c70f785306104ed8661115a565b6104f68661115a565b6040516001600160e01b031960e087901b1681526001600160a01b031990941660048501526001600160a01b039092166024840152600f90810b60448401520b60648201526084016020604051808303816000875af115801561055d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105819190611120565b5073a354f35829ae975e850e23e9615b11da1b3dc4de6001600160a01b0316633ccfd60b6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156105d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fa9190611107565b5060405163a9059cbb60e01b81527332e4c68b3a4a813b710595aeba7f6b7604ab9c1560048201526001600160801b038416602482015273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb489063a9059cbb906044016020604051808303816000875af115801561066f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106939190611189565b506040516370a0823160e01b815230600482015273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb489063a9059cbb90879083906370a0823190602401602060405180830381865afa1580156106ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107119190611107565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af115801561075c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020b9190611189565b604051631e81f82960e01b81526001600160a01b03198716600482015260009073c88191f8cb8e6d4a668b047c1c8503432c3ca86790631e81f82990602401606060405180830381865afa1580156107dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108009190611239565b6040516315740f8d60e21b81526001600160d01b03198416600482015290915060009073c88191f8cb8e6d4a668b047c1c8503432c3ca867906355d03e3490602401606060405180830381865afa15801561085f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108839190611255565b82519091506001600160a01b0316331461089c57600080fd5b60405163798a828b60e01b815273c88191f8cb8e6d4a668b047c1c8503432c3ca8679063798a828b906108d5908b9030906004016112d0565b6060604051808303816000875af11580156108f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109189190611239565b50806040015163ffffffff164263ffffffff161015610a1e576040513360248201526001600160a01b031989166044820152606481018890526001600160801b03861660848201527332e4c68b3a4a813b710595aeba7f6b7604ab9c159063c5bf0e9d9089908990309060a40160408051601f198184030181529181526020820180516001600160e01b03166350bf94d760e01b1790525160e086901b6001600160e01b03191681526109d1949392919060040161134f565b6000604051808303816000875af11580156109f0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a189190810190611399565b50610bb9565b60405163550b025360e01b81526001600160d01b0319841660048201526001600160801b038516602482015260009073c88191f8cb8e6d4a668b047c1c8503432c3ca8679063550b0253906044016020604051808303816000875af1158015610a8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaf9190611120565b6040513360248201526001600160a01b03198b1660448201526001600160801b0380831660648301528089166084830152871660a48201529091507332e4c68b3a4a813b710595aeba7f6b7604ab9c159063c5bf0e9d908390730d9a1a773be5a83eebda23bf98efb8585c3ae4f490309060c40160408051601f198184030181529181526020820180516001600160e01b0316631b9afc7d60e21b1790525160e086901b6001600160e01b0319168152610b6f9493929190600401611446565b6000604051808303816000875af1158015610b8e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bb69190810190611399565b50505b60405163798a828b60e01b815273c88191f8cb8e6d4a668b047c1c8503432c3ca8679063798a828b90610bf2908b9033906004016112d0565b6060604051808303816000875af1158015610c11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c359190611239565b505050505050505050565b6040516323b872dd60e01b81523360048201523060248201526044810185905273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48906323b872dd906064016020604051808303816000875af1158015610c9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc29190611189565b50604051636d4756d760e01b81526001600160d01b03198216600482015261303960f01b602482015260006044820181905290736cb18ff2a33e981d1e38a663ca056c0a5265066a90636d4756d7906064016080604051808303816000875af1158015610d33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d57919061148f565b5090506000610d6f6001600160801b038616876114c5565b604051602481018290526001600160801b038088166044830152861660648201526001600160a01b0319841660848201529091507332e4c68b3a4a813b710595aeba7f6b7604ab9c159063c5bf0e9d9087903090819060a40160408051601f198184030181529181526020820180516001600160e01b03166347b3484560e01b1790525160e086901b6001600160e01b0319168152610e149493929190600401611446565b6000604051808303816000875af1158015610e33573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e5b9190810190611399565b5060405163798a828b60e01b815273c88191f8cb8e6d4a668b047c1c8503432c3ca8679063798a828b90610e9590859033906004016112d0565b6060604051808303816000875af1158015610eb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed89190611239565b50505050505050565b6001600160801b0381168114610ef657600080fd5b50565b6001600160a01b031981168114610ef657600080fd5b60008060008060808587031215610f2557600080fd5b843593506020850135610f3781610ee1565b92506040850135610f4781610ee1565b91506060850135610f5781610ef9565b939692955090935050565b6001600160a01b0381168114610ef657600080fd5b60008060008060808587031215610f8d57600080fd5b8435610f9881610f62565b93506020850135610fa881610ef9565b9250604085013591506060850135610f5781610ee1565b600080600080600060a08688031215610fd757600080fd5b8535610fe281610f62565b94506020860135610ff281610ef9565b9350604086013561100281610ee1565b9250606086013561101281610ee1565b9150608086013561102281610ee1565b809150509295509295909350565b6001600160d01b031981168114610ef657600080fd5b60008060008060008060c0878903121561105f57600080fd5b863561106a81610ef9565b955060208701359450604087013561108181610f62565b9350606087013561109181610ee1565b925060808701356110a181610ee1565b915060a08701356110b181611030565b809150509295509295509295565b600080600080608085870312156110d557600080fd5b8435935060208501356110e781610ee1565b925060408501356110f781610ee1565b91506060850135610f5781611030565b60006020828403121561111957600080fd5b5051919050565b60006020828403121561113257600080fd5b815161113d81610ee1565b9392505050565b634e487b7160e01b600052601160045260246000fd5b600081600f0b6f7fffffffffffffffffffffffffffffff19810361118057611180611144565b60000392915050565b60006020828403121561119b57600080fd5b8151801515811461113d57600080fd5b634e487b7160e01b600052604160045260246000fd5b6000606082840312156111d357600080fd5b6040516060810181811067ffffffffffffffff821117156111f6576111f66111ab565b8060405250809150825161120981610f62565b8152602083015161121981611030565b6020820152604083015161122c81611030565b6040919091015292915050565b60006060828403121561124b57600080fd5b61113d83836111c1565b60006060828403121561126757600080fd5b6040516060810181811067ffffffffffffffff8211171561128a5761128a6111ab565b604052825161129881610f62565b815260208301516112a881611030565b6020820152604083015163ffffffff811681146112c457600080fd5b60408201529392505050565b6001600160a01b03199290921682526001600160a01b0316602082015260400190565b60005b8381101561130e5781810151838201526020016112f6565b8381111561131d576000848401525b50505050565b6000815180845261133b8160208601602086016112f3565b601f01601f19169290920160200192915050565b8481526001600160a01b0384811660208301528316604082015260a060608201819052600090820181905260c06080830181905261138f90830184611323565b9695505050505050565b6000602082840312156113ab57600080fd5b815167ffffffffffffffff808211156113c357600080fd5b818401915084601f8301126113d757600080fd5b8151818111156113e9576113e96111ab565b604051601f8201601f19908116603f01168101908382118183101715611411576114116111ab565b8160405282815287602084870101111561142a57600080fd5b61143b8360208301602088016112f3565b979650505050505050565b6001600160801b03851681526001600160a01b0384811660208301528316604082015260a060608201819052600090820181905260c06080830181905261138f90830184611323565b600080608083850312156114a257600080fd5b82516114ad81610ef9565b91506114bc84602085016111c1565b90509250929050565b600082198211156114d8576114d8611144565b50019056fea2646970667358221220e28b727b79fda36fa2c9ac157131c8697d75b0471d9e26874bb162295b7a6ce164736f6c634300080e0033";

type YieldLeverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldLeverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldLever__factory extends ContractFactory {
  constructor(...args: YieldLeverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YieldLever> {
    return super.deploy(overrides || {}) as Promise<YieldLever>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): YieldLever {
    return super.attach(address) as YieldLever;
  }
  override connect(signer: Signer): YieldLever__factory {
    return super.connect(signer) as YieldLever__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldLeverInterface {
    return new utils.Interface(_abi) as YieldLeverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldLever {
    return new Contract(address, _abi, signerOrProvider) as YieldLever;
  }
}