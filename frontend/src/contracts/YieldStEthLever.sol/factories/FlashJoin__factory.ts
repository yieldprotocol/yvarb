/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FlashJoin, FlashJoinInterface } from "../FlashJoin";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "FlashFeeFactorSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "newAdminRole",
        type: "bytes4",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "FLASH_LOANS_DISABLED",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LOCK",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LOCK8605463013",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT4146650865",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "exit",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "flashFeeFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC3156FlashBorrower",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4[]",
        name: "roles",
        type: "bytes4[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "join",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
    ],
    name: "lockRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "maxFlashLoan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "retrieve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4[]",
        name: "roles",
        type: "bytes4[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "flashFeeFactor_",
        type: "uint256",
      },
    ],
    name: "setFlashFeeFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        internalType: "bytes4",
        name: "adminRole",
        type: "bytes4",
      },
    ],
    name: "setRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "storedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526000196002553480156200001757600080fd5b5060405162001818380380620018188339810160408190526200003a91620001a5565b80620000486000336200006f565b6200005c6001600160e01b03198062000107565b6001600160a01b031660805250620001d7565b6001600160e01b031982166000908152602081815260408083206001600160a01b038516845290915290205460ff1662000103576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916600117905551339391927fe6231789d19137da31d0550f4ba9ee379020a8cfb64cb79bf1790c996d2e616591a45b5050565b6001600160e01b0319811662000139836001600160e01b03191660009081526020819052604090206001015460e01b90565b6001600160e01b0319161462000103576001600160e01b0319828116600081815260208190526040808220600101805463ffffffff191660e087901c17905551928416927fd348e2220a50b4500ec353f6e802d2f14dd1b5d6786148fd1bbcc570bf92d4739190a35050565b600060208284031215620001b857600080fd5b81516001600160a01b0381168114620001d057600080fd5b9392505050565b6080516115fb6200021d600039600081816101fd015281816104a001528181610647015281816107df0152818161093a01528181610a670152610c5d01526115fb6000f3fe608060405234801561001057600080fd5b50600436106101535760003560e01c8063687f0e4c116100c3578063d9d98ce41161007c578063d9d98ce4146102fa578063de02cde71461030d578063e9eca99414610320578063effae35314610329578063f06c2dfc1461033c578063ffffffff146102a957600080fd5b8063687f0e4c14610296578063a4f0d7d0146102a9578063ad82110f146102b8578063ae93c1b5146102cb578063bac7340c146102de578063ceae3abd146102e757600080fd5b806344faded01161011557806344faded014610237578063559742d91461024a5780635909c12f146101585780635ba5e9f01461025d5780635cffe9de14610270578063613255ab1461028357600080fd5b801561015857806310ab94321461017e57806312e5ff77146101a1578063159c03dd146101cc5780631e57c37d146101e157806338d52e0f146101f8575b600080fd5b610160600081565b6040516001600160e01b031990911681526020015b60405180910390f35b61019161018c36600461102d565b61034f565b6040519015158152602001610175565b6101b46101af366004611064565b610362565b6040516001600160801b039091168152602001610175565b6101df6101da36600461109e565b6103a9565b005b6101ea60001981565b604051908152602001610175565b61021f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610175565b6101df61024536600461102d565b61040e565b6101df6102583660046110b7565b61044c565b61016061026b3660046110b7565b61048b565b61019161027e366004611141565b61049c565b6101ea6102913660046111f0565b610643565b6101df6102a436600461102d565b61068d565b6101606001600160e01b031981565b6101df6102c636600461120d565b6106e8565b6101df6102d93660046112cc565b61076a565b6101ea60025481565b6101b46102f5366004611064565b61079d565b6101ea6103083660046112ff565b6107db565b6101df61031b36600461102d565b61085e565b6101ea60015481565b6101df61033736600461120d565b610891565b6101df61034a36600461132b565b610906565b600061035b8383610a2d565b9392505050565b600061037a6000356001600160e01b03191633610a2d565b61039f5760405162461bcd60e51b815260040161039690611349565b60405180910390fd5b61035b8383610a62565b6103bf6000356001600160e01b03191633610a2d565b6103db5760405162461bcd60e51b815260040161039690611349565b600281905560405181907ff68737d5e8496ca5e19cbdd129d7c94946f794b55f680f7df5a9893eb689044990600090a250565b8161042161041b82610ace565b33610a2d565b61043d5760405162461bcd60e51b815260040161039690611370565b6104478383610af0565b505050565b8061045961041b82610ace565b6104755760405162461bcd60e51b815260040161039690611370565b610487826001600160e01b0319610b5f565b5050565b600061049682610ace565b92915050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b0316146105165760405162461bcd60e51b8152602060048201526014602482015273556e737570706f727465642063757272656e637960601b6044820152606401610396565b600061052184610bde565b9050600061053661053186610c2b565b610bde565b90506105428783610a62565b506040516323e30c8b60e01b81527f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9906001600160a01b038916906323e30c8b906105999033908b90889088908c906004016113f0565b6020604051808303816000875af11580156105b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105dc919061143e565b146106225760405162461bcd60e51b81526020600482015260166024820152752737b716b1b7b6b83634b0b73a103137b93937bbb2b960511b6044820152606401610396565b61063587610630838561146d565b610c42565b506001979650505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614610685576000610496565b505060015490565b6001600160a01b03811633146106de5760405162461bcd60e51b81526020600482015260166024820152752932b737bab731b29037b7363c903337b91039b2b63360511b6044820152606401610396565b6104878282610af0565b60005b82518110156104475761071961041b84838151811061070c5761070c611498565b6020026020010151610ace565b6107355760405162461bcd60e51b815260040161039690611370565b61075883828151811061074a5761074a611498565b602002602001015183610af0565b80610762816114ae565b9150506106eb565b8161077761041b82610ace565b6107935760405162461bcd60e51b815260040161039690611370565b6104478383610b5f565b60006107b56000356001600160e01b03191633610a2d565b6107d15760405162461bcd60e51b815260040161039690611349565b61035b8383610c42565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b0316146108555760405162461bcd60e51b8152602060048201526014602482015273556e737570706f727465642063757272656e637960601b6044820152606401610396565b61035b82610c2b565b8161086b61041b82610ace565b6108875760405162461bcd60e51b815260040161039690611370565b6104478383610d25565b60005b8251811015610447576108b561041b84838151811061070c5761070c611498565b6108d15760405162461bcd60e51b815260040161039690611370565b6108f48382815181106108e6576108e6611498565b602002602001015183610d25565b806108fe816114ae565b915050610894565b61091c6000356001600160e01b03191633610a2d565b6109385760405162461bcd60e51b815260040161039690611349565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316036109ae5760405162461bcd60e51b8152602060048201526012602482015271155cd948195e1a5d08199bdc88185cdcd95d60721b6044820152606401610396565b6040516370a0823160e01b81523060048201526104879082906001600160a01b038516906370a0823190602401602060405180830381865afa1580156109f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1c919061143e565b6001600160a01b0385169190610d96565b6001600160e01b031982166000908152602081815260408083206001600160a01b038516845290915290205460ff1692915050565b6000807f00000000000000000000000000000000000000000000000000000000000000009050826001600160801b031660016000828254610aa391906114c7565b90915550610ac690506001600160a01b038216856001600160801b038616610d96565b509092915050565b6001600160e01b03191660009081526020819052604090206001015460e01b90565b610afa8282610a2d565b15610487576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339391927f4ddc7b757e7bdd7254a9cd39452d307a52761bc824625c6a33104a075d8099e691a45050565b6001600160e01b03198116610b7383610ace565b6001600160e01b03191614610487576001600160e01b0319828116600081815260208190526040808220600101805463ffffffff191660e087901c17905551928416927fd348e2220a50b4500ec353f6e802d2f14dd1b5d6786148fd1bbcc570bf92d4739190a35050565b60006001600160801b03821115610c275760405162461bcd60e51b815260206004820152600d60248201526c43617374206f766572666c6f7760981b6044820152606401610396565b5090565b600061049660025483610e8b90919063ffffffff16565b6001546040516370a0823160e01b81523060048201526000917f000000000000000000000000000000000000000000000000000000000000000091839082906001600160a01b038516906370a0823190602401602060405180830381865afa158015610cb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd6919061143e565b610ce091906114c7565b6001600160801b038616838101600155909150811015610d1b57610d1b6001600160a01b03841687306001600160801b038916859003610ea9565b5092949350505050565b610d2f8282610a2d565b610487576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916600117905551339391927fe6231789d19137da31d0550f4ba9ee379020a8cfb64cb79bf1790c996d2e616591a45050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839290871691610df291906114de565b6000604051808303816000865af19150503d8060008114610e2f576040519150601f19603f3d011682016040523d82523d6000602084013e610e34565b606091505b5091509150818015610e5e575080511580610e5e575080806020019051810190610e5e91906114fa565b610e8457610e6b81610f8e565b60405162461bcd60e51b8152600401610396919061151c565b5050505050565b6000610e97828461152f565b670de0b6b3a764000090049392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839290881691610f0d91906114de565b6000604051808303816000865af19150503d8060008114610f4a576040519150601f19603f3d011682016040523d82523d6000602084013e610f4f565b606091505b5091509150818015610f79575080511580610f79575080806020019051810190610f7991906114fa565b610f8657610e6b81610f8e565b505050505050565b6060604482511015610fd357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60048201915081806020019051810190610496919061154e565b80356001600160e01b03198116811461100557600080fd5b919050565b6001600160a01b038116811461101f57600080fd5b50565b80356110058161100a565b6000806040838503121561104057600080fd5b61104983610fed565b915060208301356110598161100a565b809150509250929050565b6000806040838503121561107757600080fd5b82356110828161100a565b915060208301356001600160801b038116811461105957600080fd5b6000602082840312156110b057600080fd5b5035919050565b6000602082840312156110c957600080fd5b61035b82610fed565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611111576111116110d2565b604052919050565b600067ffffffffffffffff821115611133576111336110d2565b50601f01601f191660200190565b6000806000806080858703121561115757600080fd5b84356111628161100a565b935060208501356111728161100a565b925060408501359150606085013567ffffffffffffffff81111561119557600080fd5b8501601f810187136111a657600080fd5b80356111b96111b482611119565b6110e8565b8181528860208385010111156111ce57600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60006020828403121561120257600080fd5b813561035b8161100a565b6000806040838503121561122057600080fd5b823567ffffffffffffffff8082111561123857600080fd5b818501915085601f83011261124c57600080fd5b8135602082821115611260576112606110d2565b8160051b92506112718184016110e8565b828152928401810192818101908985111561128b57600080fd5b948201945b848610156112b0576112a186610fed565b82529482019490820190611290565b96506112bf9050878201611022565b9450505050509250929050565b600080604083850312156112df57600080fd5b6112e883610fed565b91506112f660208401610fed565b90509250929050565b6000806040838503121561131257600080fd5b823561131d8161100a565b946020939093013593505050565b6000806040838503121561133e57600080fd5b82356110498161100a565b6020808252600d908201526c1058d8d95cdcc819195b9a5959609a1b604082015260600190565b6020808252600a908201526927b7363c9030b236b4b760b11b604082015260600190565b60005b838110156113af578181015183820152602001611397565b838111156113be576000848401525b50505050565b600081518084526113dc816020860160208601611394565b601f01601f19169290920160200192915050565b6001600160a01b038681168252851660208201526001600160801b0384811660408301528316606082015260a060808201819052600090611433908301846113c4565b979650505050505050565b60006020828403121561145057600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60006001600160801b0380831681851680830382111561148f5761148f611457565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016114c0576114c0611457565b5060010190565b6000828210156114d9576114d9611457565b500390565b600082516114f0818460208701611394565b9190910192915050565b60006020828403121561150c57600080fd5b8151801515811461035b57600080fd5b60208152600061035b60208301846113c4565b600081600019048311821515161561154957611549611457565b500290565b60006020828403121561156057600080fd5b815167ffffffffffffffff81111561157757600080fd5b8201601f8101841361158857600080fd5b80516115966111b482611119565b8181528560208385010111156115ab57600080fd5b6115bc826020830160208601611394565b9594505050505056fea26469706673582212204dbd9d6350f58028ed1fa8fc599aadc7f167b735e430a245acf20eabdf665cc864736f6c634300080e0033";

type FlashJoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlashJoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FlashJoin__factory extends ContractFactory {
  constructor(...args: FlashJoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    asset_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FlashJoin> {
    return super.deploy(asset_, overrides || {}) as Promise<FlashJoin>;
  }
  override getDeployTransaction(
    asset_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(asset_, overrides || {});
  }
  override attach(address: string): FlashJoin {
    return super.attach(address) as FlashJoin;
  }
  override connect(signer: Signer): FlashJoin__factory {
    return super.connect(signer) as FlashJoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlashJoinInterface {
    return new utils.Interface(_abi) as FlashJoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashJoin {
    return new Contract(address, _abi, signerOrProvider) as FlashJoin;
  }
}
