/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  YieldStEthLever,
  YieldStEthLeverInterface,
} from "../../YieldStEthLever.sol/YieldStEthLever";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Giver",
        name: "giver_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FlashLoanFailure",
    type: "error",
  },
  {
    inputs: [],
    name: "SlippageFailure",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "baseAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "borrowAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "minCollateral",
        type: "uint128",
      },
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
    ],
    name: "invest",
    outputs: [
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onFlashLoan",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint256",
        name: "minWeth",
        type: "uint256",
      },
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
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
  "0x60a06040523480156200001157600080fd5b5060405162001fcc38038062001fcc833981016040819052620000349162000331565b6001600160a01b03811660805260405163095ea7b360e01b8152736cb18ff2a33e981d1e38a663ca056c0a5265066a600482015260001960248201527353358d088d835399f1e97d2a01d79fc925c7d9999063095ea7b3906044016020604051808303816000875af1158015620000af573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d5919062000363565b5060405163095ea7b360e01b815273828b154032950c8ff7cf8085d841723db26960566004820152600019602482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc29063095ea7b3906044016020604051808303816000875af115801562000144573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016a919062000363565b5060405163095ea7b360e01b815273828b154032950c8ff7cf8085d841723db26960566004820152600019602482015273ae7ab96520de3a18e5e111b5eaab095312d7fe849063095ea7b3906044016020604051808303816000875af1158015620001d9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001ff919062000363565b5060405163095ea7b360e01b8152733bdb887dc46ec0e964df89ffe2980db0121f0fd06004820152600019602482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc29063095ea7b3906044016020604051808303816000875af11580156200026e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000294919062000363565b5060405163095ea7b360e01b8152737f39c581f595b53c5cb19bd0b3f8da6c935e2ca06004820152600019602482015273ae7ab96520de3a18e5e111b5eaab095312d7fe849063095ea7b3906044016020604051808303816000875af115801562000303573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000329919062000363565b505062000387565b6000602082840312156200034457600080fd5b81516001600160a01b03811681146200035c57600080fd5b9392505050565b6000602082840312156200037657600080fd5b815180151581146200035c57600080fd5b608051611c1b620003b16000396000818161015e015281816105dd01526109330152611c1b6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806316e2b3d91461004657806323e30c8b1461005b578063c8d935f914610081575b600080fd5b6100596100543660046114e1565b6100ad565b005b61006e61006936600461155e565b610661565b6040519081526020015b60405180910390f35b61009461008f366004611608565b610785565b6040516001600160a01b03199091168152602001610078565b604051631e81f82960e01b81526001600160a01b03198316600482015260009073c88191f8cb8e6d4a668b047c1c8503432c3ca86790631e81f82990602401606060405180830381865afa158015610109573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012d9190611664565b50909150506001600160a01b038116331461014757600080fd5b6040516335775afb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335775afb9061019590869030906004016116b1565b6060604051808303816000875af11580156101b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d89190611762565b506040516315740f8d60e21b81526001600160d01b03198316600482015260009073c88191f8cb8e6d4a668b047c1c8503432c3ca867906355d03e3490602401606060405180830381865afa158015610235573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102599190611785565b925050508063ffffffff164263ffffffff16101561038b57604051600160f91b60208201526001600160a01b0319851660218201526001600160801b0319608089811b8216602d84015288901b16603d8201526bffffffffffffffffffffffff193360601b16604d8201526061810186905260009060810160408051601f1981840301815290829052632e7ff4ef60e11b825291506000907353358d088d835399f1e97d2a01d79fc925c7d99990635cffe9de9061032190309084908d90889060040161182c565b6020604051808303816000875af1158015610340573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103649190611871565b90508061038457604051639126aa2360e01b815260040160405180910390fd5b50506105c6565b6000600360f81b858960801b8960801b6040516020016103ae9493929190611893565b60408051808303601f190181529082905263550b025360e01b82526001600160d01b0319861660048301526001600160801b0389166024830152915060009073c88191f8cb8e6d4a668b047c1c8503432c3ca8679063550b0253906044016020604051808303816000875af115801561042b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044f91906118d1565b604051632e7ff4ef60e11b8152909150600090733bdb887dc46ec0e964df89ffe2980db0121f0fd090635cffe9de906104a690309073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2908790899060040161182c565b6020604051808303816000875af11580156104c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e99190611871565b90508061050957604051639126aa2360e01b815260040160405180910390fd5b6040516370a0823160e01b815230600482015260009073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2906370a0823190602401602060405180830381865afa15801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f91906118ee565b9050888110156105a25760405163f2f38a5960e01b815260040160405180910390fd5b6105c173c02aaa39b223fe8d0a0e5c4f27ead9083c756cc233836109b8565b505050505b60405163798a828b60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063798a828b9061061490879033906004016116b1565b6060604051808303816000875af1158015610633573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106579190611762565b5050505050505050565b6000337353358d088d835399f1e97d2a01d79fc925c7d9991480159061069b575033733bdb887dc46ec0e964df89ffe2980db0121f0fd014155b806106af57506001600160a01b0387163014155b156106cd57604051639126aa2360e01b815260040160405180910390fd5b6000838360008181106106e2576106e2611907565b909101356001600160f81b031916915050600160f81b8190036107105761070b86868686610ab6565b610758565b6001600160f81b03198116600160f91b036107395761070b6107328688611933565b8585610dcc565b6001600160f81b03198116600360f81b0361075857610758848461116c565b507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9979650505050505050565b60006107b07353358d088d835399f1e97d2a01d79fc925c7d99933306001600160801b038916611353565b604051636d4756d760e01b81526001600160d01b031983166004820152610c0d60f21b602482015260006044820152736cb18ff2a33e981d1e38a663ca056c0a5265066a90636d4756d7906064016080604051808303816000875af115801561081d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610841919061194b565b50809150506000600160f81b828760801b8660801b6040516020016108699493929190611893565b60408051601f1981840301815290829052632e7ff4ef60e11b825291506000907353358d088d835399f1e97d2a01d79fc925c7d99990635cffe9de906108b990309084908b90889060040161182c565b6020604051808303816000875af11580156108d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fc9190611871565b90508061091c57604051639126aa2360e01b815260040160405180910390fd5b60405163798a828b60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063798a828b9061096a90869033906004016116b1565b6060604051808303816000875af1158015610989573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ad9190611762565b505050949350505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839290871691610a149190611981565b6000604051808303816000865af19150503d8060008114610a51576040519150601f19603f3d011682016040523d82523d6000602084013e610a56565b606091505b5091509150818015610a80575080511580610a80575080806020019051810190610a809190611871565b610aaf57610a8d81611438565b60405162461bcd60e51b8152600401610aa6919061199d565b60405180910390fd5b5050505050565b60008385610ac8601d600d86886119b0565b610ad1916119da565b610ade919060801c611933565b610ae89190611a0a565b9050610b267353358d088d835399f1e97d2a01d79fc925c7d99973c3348d8449d13c364479b1f114bcf5b73dfc0dc66001600160801b0384166109b8565b604051635e1e8e2760e11b81523060048201526000602482018190529073c3348d8449d13c364479b1f114bcf5b73dfc0dc69063bc3d1c4e906044016020604051808303816000875af1158015610b81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba591906118d1565b6001600160801b03169050600073828b154032950c8ff7cf8085d841723db26960566001600160a01b031663ddc1f59d60006001856000306040518663ffffffff1660e01b8152600401610bfd959493929190611a21565b6020604051808303816000875af1158015610c1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4091906118ee565b604051630ea598cb60e41b815260048101829052909150600090737f39c581f595b53c5cb19bd0b3f8da6c935e2ca09063ea598cb0906024016020604051808303816000875af1158015610c98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbc91906118ee565b9050610ccc602d601d87896119b0565b610cd5916119da565b60801c6001600160801b0382161015610d015760405163f2f38a5960e01b815260040160405180910390fd5b610d3d737f39c581f595b53c5cb19bd0b3f8da6c935e2ca0735364d336c2d2391717bd366b29b6f351842d7f826001600160801b0384166109b8565b736cb18ff2a33e981d1e38a663ca056c0a5265066a6399d42940610d65600d6001898b6119b0565b610d6e91611a54565b30848c6040518563ffffffff1660e01b8152600401610d909493929190611a82565b600060405180830381600087803b158015610daa57600080fd5b505af1158015610dbe573d6000803e3d6000fd5b505050505050505050505050565b6000610ddc601d600d84866119b0565b610de5916119da565b60801c9050736cb18ff2a33e981d1e38a663ca056c0a5265066a6399d42940610e12600d600186886119b0565b610e1b91611a54565b30610e2585611ab8565b610e33602d601d898b6119b0565b610e3c916119da565b60801c610e4890611ab8565b6040518563ffffffff1660e01b8152600401610e679493929190611a82565b600060405180830381600087803b158015610e8157600080fd5b505af1158015610e95573d6000803e3d6000fd5b5050604051636f074d1f60e11b81526001600160801b038416600482015260009250737f39c581f595b53c5cb19bd0b3f8da6c935e2ca0915063de0e9a3e906024016020604051808303816000875af1158015610ef6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1a91906118ee565b60405163ddc1f59d60e01b815290915060009073828b154032950c8ff7cf8085d841723db26960569063ddc1f59d90610f60906001908590879083903090600401611a21565b6020604051808303816000875af1158015610f7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa391906118ee565b60405163fdb0732d60e01b81526001600160801b038816600482015290915060009073c3348d8449d13c364479b1f114bcf5b73dfc0dc69063fdb0732d90602401602060405180830381865afa158015611001573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102591906118d1565b905061106373c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273c3348d8449d13c364479b1f114bcf5b73dfc0dc66001600160801b0384166109b8565b60405163fe2846b160e01b81523060048201526001600160801b0380891660248301528216604482015273c3348d8449d13c364479b1f114bcf5b73dfc0dc69063fe2846b1906064016020604051808303816000875af11580156110cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ef91906118d1565b506001600160801b038116820361110a60616041888a6119b0565b61111391611ae7565b8110156111335760405163f2f38a5960e01b815260040160405180910390fd5b6106576111446041602d898b6119b0565b61114d91611b05565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc29060601c836109b8565b600061117c601d600d84866119b0565b611185916119da565b60801c9050736cb18ff2a33e981d1e38a663ca056c0a5265066a63441c70f76111b2600d600186886119b0565b6111bb91611a54565b306111c585611ab8565b6111d3602d601d898b6119b0565b6111dc916119da565b60801c6111e890611ab8565b6040518563ffffffff1660e01b81526004016112079493929190611a82565b6020604051808303816000875af1158015611226573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124a91906118d1565b50604051636f074d1f60e11b81526001600160801b0382166004820152600090737f39c581f595b53c5cb19bd0b3f8da6c935e2ca09063de0e9a3e906024016020604051808303816000875af11580156112a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cc91906118ee565b60405163ddc1f59d60e01b815290915073828b154032950c8ff7cf8085d841723db26960569063ddc1f59d9061131090600190600090869082903090600401611a21565b6020604051808303816000875af115801561132f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaf91906118ee565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916113b79190611981565b6000604051808303816000865af19150503d80600081146113f4576040519150601f19603f3d011682016040523d82523d6000602084013e6113f9565b606091505b50915091508180156114235750805115806114235750808060200190518101906114239190611871565b61143057610a8d81611438565b505050505050565b606060448251101561147d57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600482019150818060200190518101906114979190611b38565b92915050565b6001600160801b03811681146114b257600080fd5b50565b6001600160a01b0319811681146114b257600080fd5b6001600160d01b0319811681146114b257600080fd5b600080600080600060a086880312156114f957600080fd5b85356115048161149d565b945060208601356115148161149d565b935060408601359250606086013561152b816114b5565b9150608086013561153b816114cb565b809150509295509295909350565b6001600160a01b03811681146114b257600080fd5b60008060008060008060a0878903121561157757600080fd5b863561158281611549565b9550602087013561159281611549565b94506040870135935060608701359250608087013567ffffffffffffffff808211156115bd57600080fd5b818901915089601f8301126115d157600080fd5b8135818111156115e057600080fd5b8a60208285010111156115f257600080fd5b6020830194508093505050509295509295509295565b6000806000806080858703121561161e57600080fd5b84356116298161149d565b935060208501356116398161149d565b925060408501356116498161149d565b91506060850135611659816114cb565b939692955090935050565b60008060006060848603121561167957600080fd5b835161168481611549565b6020850151909350611695816114cb565b60408501519092506116a6816114cb565b809150509250925092565b6001600160a01b03199290921682526001600160a01b0316602082015260400190565b634e487b7160e01b600052604160045260246000fd5b6000606082840312156116fc57600080fd5b6040516060810181811067ffffffffffffffff8211171561171f5761171f6116d4565b8060405250809150825161173281611549565b81526020830151611742816114cb565b60208201526040830151611755816114cb565b6040919091015292915050565b60006060828403121561177457600080fd5b61177e83836116ea565b9392505050565b60008060006060848603121561179a57600080fd5b83516117a581611549565b60208501519093506117b6816114cb565b604085015190925063ffffffff811681146116a657600080fd5b60005b838110156117eb5781810151838201526020016117d3565b838111156117fa576000848401525b50505050565b600081518084526118188160208601602086016117d0565b601f01601f19169290920160200192915050565b6001600160a01b038581168252841660208201526001600160801b038316604082015260806060820181905260009061186790830184611800565b9695505050505050565b60006020828403121561188357600080fd5b8151801515811461177e57600080fd5b6001600160f81b03199490941684526001600160a01b03199290921660018401526001600160801b0319908116600d84015216601d820152602d0190565b6000602082840312156118e357600080fd5b815161177e8161149d565b60006020828403121561190057600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156119465761194661191d565b500190565b6000806080838503121561195e57600080fd5b8251611969816114b5565b915061197884602085016116ea565b90509250929050565b600082516119938184602087016117d0565b9190910192915050565b60208152600061177e6020830184611800565b600080858511156119c057600080fd5b838611156119cd57600080fd5b5050820193919092039150565b6001600160801b03198135818116916010851015611a025780818660100360031b1b83161692505b505092915050565b600082821015611a1c57611a1c61191d565b500390565b600f95860b81529390940b6020840152604083019190915260608201526001600160a01b03909116608082015260a00190565b6001600160a01b0319813581811691600c851015611a0257600c9490940360031b84901b1690921692915050565b6001600160a01b03199490941684526001600160a01b03929092166020840152600f90810b60408401520b606082015260800190565b600081600f0b6f7fffffffffffffffffffffffffffffff198103611ade57611ade61191d565b60000392915050565b8035602083101561149757600019602084900360031b1b1692915050565b6bffffffffffffffffffffffff198135818116916014851015611a025760149490940360031b84901b1690921692915050565b600060208284031215611b4a57600080fd5b815167ffffffffffffffff80821115611b6257600080fd5b818401915084601f830112611b7657600080fd5b815181811115611b8857611b886116d4565b604051601f8201601f19908116603f01168101908382118183101715611bb057611bb06116d4565b81604052828152876020848701011115611bc957600080fd5b611bda8360208301602088016117d0565b97965050505050505056fea26469706673582212201bb31789e2c468453bfe811c9c075ee2beff7d83e0e51b691a51987147ff7e5e64736f6c634300080e0033";

type YieldStEthLeverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldStEthLeverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldStEthLever__factory extends ContractFactory {
  constructor(...args: YieldStEthLeverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    giver_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YieldStEthLever> {
    return super.deploy(giver_, overrides || {}) as Promise<YieldStEthLever>;
  }
  override getDeployTransaction(
    giver_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(giver_, overrides || {});
  }
  override attach(address: string): YieldStEthLever {
    return super.attach(address) as YieldStEthLever;
  }
  override connect(signer: Signer): YieldStEthLever__factory {
    return super.connect(signer) as YieldStEthLever__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldStEthLeverInterface {
    return new utils.Interface(_abi) as YieldStEthLeverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldStEthLever {
    return new Contract(address, _abi, signerOrProvider) as YieldStEthLever;
  }
}