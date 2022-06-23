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
  "0x60a06040523480156200001157600080fd5b5060405162001fa038038062001fa0833981016040819052620000349162000331565b6001600160a01b03811660805260405163095ea7b360e01b8152736cb18ff2a33e981d1e38a663ca056c0a5265066a600482015260001960248201527353358d088d835399f1e97d2a01d79fc925c7d9999063095ea7b3906044016020604051808303816000875af1158015620000af573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d5919062000363565b5060405163095ea7b360e01b815273828b154032950c8ff7cf8085d841723db26960566004820152600019602482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc29063095ea7b3906044016020604051808303816000875af115801562000144573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016a919062000363565b5060405163095ea7b360e01b815273828b154032950c8ff7cf8085d841723db26960566004820152600019602482015273ae7ab96520de3a18e5e111b5eaab095312d7fe849063095ea7b3906044016020604051808303816000875af1158015620001d9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001ff919062000363565b5060405163095ea7b360e01b8152733bdb887dc46ec0e964df89ffe2980db0121f0fd06004820152600019602482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc29063095ea7b3906044016020604051808303816000875af11580156200026e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000294919062000363565b5060405163095ea7b360e01b8152737f39c581f595b53c5cb19bd0b3f8da6c935e2ca06004820152600019602482015273ae7ab96520de3a18e5e111b5eaab095312d7fe849063095ea7b3906044016020604051808303816000875af115801562000303573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000329919062000363565b505062000387565b6000602082840312156200034457600080fd5b81516001600160a01b03811681146200035c57600080fd5b9392505050565b6000602082840312156200037657600080fd5b815180151581146200035c57600080fd5b608051611bef620003b160003960008181610157015281816105d201526109260152611bef6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806316e2b3d91461004657806323e30c8b1461005b578063c8d935f914610081575b600080fd5b6100596100543660046114d2565b6100ad565b005b61006e61006936600461154f565b610654565b6040519081526020015b60405180910390f35b61009461008f3660046115f9565b610778565b6040516001600160a01b03199091168152602001610078565b604051631e81f82960e01b81526001600160a01b031983166004820152339073c88191f8cb8e6d4a668b047c1c8503432c3ca86790631e81f82990602401606060405180830381865afa158015610108573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012c91906116e3565b516001600160a01b03161461014057600080fd5b6040516335775afb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335775afb9061018e9085903090600401611706565b6060604051808303816000875af11580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d191906116e3565b506040516315740f8d60e21b81526001600160d01b03198216600482015273c88191f8cb8e6d4a668b047c1c8503432c3ca867906355d03e3490602401606060405180830381865afa15801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f9190611729565b6040015163ffffffff164263ffffffff16101561038057604051600160f91b60208201526001600160a01b0319831660218201526001600160801b0319608087811b8216602d84015286901b16603d8201526bffffffffffffffffffffffff193360601b16604d8201526061810184905260009060810160408051601f1981840301815290829052632e7ff4ef60e11b825291506000907353358d088d835399f1e97d2a01d79fc925c7d99990635cffe9de9061031690309084908b908890600401611800565b6020604051808303816000875af1158015610335573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103599190611845565b90508061037957604051639126aa2360e01b815260040160405180910390fd5b50506105bb565b6000600360f81b838760801b8760801b6040516020016103a39493929190611867565b60408051808303601f190181529082905263550b025360e01b82526001600160d01b0319841660048301526001600160801b0387166024830152915060009073c88191f8cb8e6d4a668b047c1c8503432c3ca8679063550b0253906044016020604051808303816000875af1158015610420573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044491906118a5565b604051632e7ff4ef60e11b8152909150600090733bdb887dc46ec0e964df89ffe2980db0121f0fd090635cffe9de9061049b90309073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc29087908990600401611800565b6020604051808303816000875af11580156104ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104de9190611845565b9050806104fe57604051639126aa2360e01b815260040160405180910390fd5b6040516370a0823160e01b815230600482015260009073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2906370a0823190602401602060405180830381865afa158015610550573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057491906118c2565b9050868110156105975760405163f2f38a5960e01b815260040160405180910390fd5b6105b673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc233836109ab565b505050505b60405163798a828b60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063798a828b906106099085903390600401611706565b6060604051808303816000875af1158015610628573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064c91906116e3565b505050505050565b6000337353358d088d835399f1e97d2a01d79fc925c7d9991480159061068e575033733bdb887dc46ec0e964df89ffe2980db0121f0fd014155b806106a257506001600160a01b0387163014155b156106c057604051639126aa2360e01b815260040160405180910390fd5b6000838360008181106106d5576106d56118db565b909101356001600160f81b031916915050600160f81b819003610703576106fe86868686610aa9565b61074b565b6001600160f81b03198116600160f91b0361072c576106fe6107258688611907565b8585610dbf565b6001600160f81b03198116600360f81b0361074b5761074b8484611169565b507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9979650505050505050565b60006107a37353358d088d835399f1e97d2a01d79fc925c7d99933306001600160801b038916611350565b604051636d4756d760e01b81526001600160d01b031983166004820152610c0d60f21b602482015260006044820152736cb18ff2a33e981d1e38a663ca056c0a5265066a90636d4756d7906064016080604051808303816000875af1158015610810573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610834919061191f565b50809150506000600160f81b828760801b8660801b60405160200161085c9493929190611867565b60408051601f1981840301815290829052632e7ff4ef60e11b825291506000907353358d088d835399f1e97d2a01d79fc925c7d99990635cffe9de906108ac90309084908b908890600401611800565b6020604051808303816000875af11580156108cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ef9190611845565b90508061090f57604051639126aa2360e01b815260040160405180910390fd5b60405163798a828b60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063798a828b9061095d9086903390600401611706565b6060604051808303816000875af115801561097c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a091906116e3565b505050949350505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839290871691610a079190611955565b6000604051808303816000865af19150503d8060008114610a44576040519150601f19603f3d011682016040523d82523d6000602084013e610a49565b606091505b5091509150818015610a73575080511580610a73575080806020019051810190610a739190611845565b610aa257610a8081611429565b60405162461bcd60e51b8152600401610a999190611971565b60405180910390fd5b5050505050565b60008385610abb601d600d8688611984565b610ac4916119ae565b610ad1919060801c611907565b610adb91906119de565b9050610b197353358d088d835399f1e97d2a01d79fc925c7d99973c3348d8449d13c364479b1f114bcf5b73dfc0dc66001600160801b0384166109ab565b604051635e1e8e2760e11b81523060048201526000602482018190529073c3348d8449d13c364479b1f114bcf5b73dfc0dc69063bc3d1c4e906044016020604051808303816000875af1158015610b74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9891906118a5565b6001600160801b03169050600073828b154032950c8ff7cf8085d841723db26960566001600160a01b031663ddc1f59d60006001856000306040518663ffffffff1660e01b8152600401610bf09594939291906119f5565b6020604051808303816000875af1158015610c0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3391906118c2565b604051630ea598cb60e41b815260048101829052909150600090737f39c581f595b53c5cb19bd0b3f8da6c935e2ca09063ea598cb0906024016020604051808303816000875af1158015610c8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610caf91906118c2565b9050610cbf602d601d8789611984565b610cc8916119ae565b60801c6001600160801b0382161015610cf45760405163f2f38a5960e01b815260040160405180910390fd5b610d30737f39c581f595b53c5cb19bd0b3f8da6c935e2ca0735364d336c2d2391717bd366b29b6f351842d7f826001600160801b0384166109ab565b736cb18ff2a33e981d1e38a663ca056c0a5265066a6399d42940610d58600d6001898b611984565b610d6191611a28565b30848c6040518563ffffffff1660e01b8152600401610d839493929190611a56565b600060405180830381600087803b158015610d9d57600080fd5b505af1158015610db1573d6000803e3d6000fd5b505050505050505050505050565b6000610dcf601d600d8486611984565b610dd8916119ae565b60801c9050736cb18ff2a33e981d1e38a663ca056c0a5265066a6399d42940610e05600d60018688611984565b610e0e91611a28565b30610e1885611a8c565b610e26602d601d898b611984565b610e2f916119ae565b60801c610e3b90611a8c565b6040518563ffffffff1660e01b8152600401610e5a9493929190611a56565b600060405180830381600087803b158015610e7457600080fd5b505af1158015610e88573d6000803e3d6000fd5b5050604051636f074d1f60e11b81526001600160801b038416600482015260009250737f39c581f595b53c5cb19bd0b3f8da6c935e2ca0915063de0e9a3e906024016020604051808303816000875af1158015610ee9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0d91906118c2565b60405163ddc1f59d60e01b815290915060009073828b154032950c8ff7cf8085d841723db26960569063ddc1f59d90610f539060019085908790839030906004016119f5565b6020604051808303816000875af1158015610f72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9691906118c2565b60405163fdb0732d60e01b81526001600160801b038816600482015290915060009073c3348d8449d13c364479b1f114bcf5b73dfc0dc69063fdb0732d90602401602060405180830381865afa158015610ff4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101891906118a5565b905061105673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273c3348d8449d13c364479b1f114bcf5b73dfc0dc66001600160801b0384166109ab565b60405163fe2846b160e01b81523060048201526001600160801b0380891660248301528216604482015273c3348d8449d13c364479b1f114bcf5b73dfc0dc69063fe2846b1906064016020604051808303816000875af11580156110be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e291906118a5565b506001600160801b03811682036110fd60616041888a611984565b61110691611abb565b8110156111265760405163f2f38a5960e01b815260040160405180910390fd5b61115f6111376041602d898b611984565b61114091611ad9565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc29060601c836109ab565b5050505050505050565b6000611179601d600d8486611984565b611182916119ae565b60801c9050736cb18ff2a33e981d1e38a663ca056c0a5265066a63441c70f76111af600d60018688611984565b6111b891611a28565b306111c285611a8c565b6111d0602d601d898b611984565b6111d9916119ae565b60801c6111e590611a8c565b6040518563ffffffff1660e01b81526004016112049493929190611a56565b6020604051808303816000875af1158015611223573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124791906118a5565b50604051636f074d1f60e11b81526001600160801b0382166004820152600090737f39c581f595b53c5cb19bd0b3f8da6c935e2ca09063de0e9a3e906024016020604051808303816000875af11580156112a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c991906118c2565b60405163ddc1f59d60e01b815290915073828b154032950c8ff7cf8085d841723db26960569063ddc1f59d9061130d906001906000908690829030906004016119f5565b6020604051808303816000875af115801561132c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa291906118c2565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916113b49190611955565b6000604051808303816000865af19150503d80600081146113f1576040519150601f19603f3d011682016040523d82523d6000602084013e6113f6565b606091505b50915091508180156114205750805115806114205750808060200190518101906114209190611845565b61064c57610a80815b606060448251101561146e57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600482019150818060200190518101906114889190611b0c565b92915050565b6001600160801b03811681146114a357600080fd5b50565b6001600160a01b0319811681146114a357600080fd5b6001600160d01b0319811681146114a357600080fd5b600080600080600060a086880312156114ea57600080fd5b85356114f58161148e565b945060208601356115058161148e565b935060408601359250606086013561151c816114a6565b9150608086013561152c816114bc565b809150509295509295909350565b6001600160a01b03811681146114a357600080fd5b60008060008060008060a0878903121561156857600080fd5b86356115738161153a565b955060208701356115838161153a565b94506040870135935060608701359250608087013567ffffffffffffffff808211156115ae57600080fd5b818901915089601f8301126115c257600080fd5b8135818111156115d157600080fd5b8a60208285010111156115e357600080fd5b6020830194508093505050509295509295509295565b6000806000806080858703121561160f57600080fd5b843561161a8161148e565b9350602085013561162a8161148e565b9250604085013561163a8161148e565b9150606085013561164a816114bc565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b60006060828403121561167d57600080fd5b6040516060810181811067ffffffffffffffff821117156116a0576116a0611655565b806040525080915082516116b38161153a565b815260208301516116c3816114bc565b602082015260408301516116d6816114bc565b6040919091015292915050565b6000606082840312156116f557600080fd5b6116ff838361166b565b9392505050565b6001600160a01b03199290921682526001600160a01b0316602082015260400190565b60006060828403121561173b57600080fd5b6040516060810181811067ffffffffffffffff8211171561175e5761175e611655565b604052825161176c8161153a565b8152602083015161177c816114bc565b6020820152604083015163ffffffff8116811461179857600080fd5b60408201529392505050565b60005b838110156117bf5781810151838201526020016117a7565b838111156117ce576000848401525b50505050565b600081518084526117ec8160208601602086016117a4565b601f01601f19169290920160200192915050565b6001600160a01b038581168252841660208201526001600160801b038316604082015260806060820181905260009061183b908301846117d4565b9695505050505050565b60006020828403121561185757600080fd5b815180151581146116ff57600080fd5b6001600160f81b03199490941684526001600160a01b03199290921660018401526001600160801b0319908116600d84015216601d820152602d0190565b6000602082840312156118b757600080fd5b81516116ff8161148e565b6000602082840312156118d457600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561191a5761191a6118f1565b500190565b6000806080838503121561193257600080fd5b825161193d816114a6565b915061194c846020850161166b565b90509250929050565b600082516119678184602087016117a4565b9190910192915050565b6020815260006116ff60208301846117d4565b6000808585111561199457600080fd5b838611156119a157600080fd5b5050820193919092039150565b6001600160801b031981358181169160108510156119d65780818660100360031b1b83161692505b505092915050565b6000828210156119f0576119f06118f1565b500390565b600f95860b81529390940b6020840152604083019190915260608201526001600160a01b03909116608082015260a00190565b6001600160a01b0319813581811691600c8510156119d657600c9490940360031b84901b1690921692915050565b6001600160a01b03199490941684526001600160a01b03929092166020840152600f90810b60408401520b606082015260800190565b600081600f0b6f7fffffffffffffffffffffffffffffff198103611ab257611ab26118f1565b60000392915050565b8035602083101561148857600019602084900360031b1b1692915050565b6bffffffffffffffffffffffff1981358181169160148510156119d65760149490940360031b84901b1690921692915050565b600060208284031215611b1e57600080fd5b815167ffffffffffffffff80821115611b3657600080fd5b818401915084601f830112611b4a57600080fd5b815181811115611b5c57611b5c611655565b604051601f8201601f19908116603f01168101908382118183101715611b8457611b84611655565b81604052828152876020848701011115611b9d57600080fd5b611bae8360208301602088016117a4565b97965050505050505056fea264697066735822122029f74a5965ad1405669b62a0b0b62e7ee830b8d1705eb9baa945b8d522ebd74d64736f6c634300080e0033";

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
