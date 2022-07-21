/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ZeroStateTestInterface extends utils.Interface {
  functions: {
    "IS_TEST()": FunctionFragment;
    "bound(uint256,uint256,uint256)": FunctionFragment;
    "deal(address,address,uint256)": FunctionFragment;
    "deal(address,address,uint256,bool)": FunctionFragment;
    "deal(address,uint256)": FunctionFragment;
    "deployCode(string,bytes)": FunctionFragment;
    "deployCode(string)": FunctionFragment;
    "failed()": FunctionFragment;
    "hoax(address)": FunctionFragment;
    "hoax(address,address)": FunctionFragment;
    "hoax(address,address,uint256)": FunctionFragment;
    "hoax(address,uint256)": FunctionFragment;
    "leverUp(uint128,uint128)": FunctionFragment;
    "rewind(uint256)": FunctionFragment;
    "setUp()": FunctionFragment;
    "skip(uint256)": FunctionFragment;
    "startHoax(address,uint256)": FunctionFragment;
    "startHoax(address,address,uint256)": FunctionFragment;
    "startHoax(address)": FunctionFragment;
    "startHoax(address,address)": FunctionFragment;
    "testInvestRevertOnMinEth()": FunctionFragment;
    "testLever()": FunctionFragment;
    "testOnFlashLoan()": FunctionFragment;
    "testVault()": FunctionFragment;
    "tip(address,address,uint256)": FunctionFragment;
    "vm()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_TEST"
      | "bound"
      | "deal(address,address,uint256)"
      | "deal(address,address,uint256,bool)"
      | "deal(address,uint256)"
      | "deployCode(string,bytes)"
      | "deployCode(string)"
      | "failed"
      | "hoax(address)"
      | "hoax(address,address)"
      | "hoax(address,address,uint256)"
      | "hoax(address,uint256)"
      | "leverUp"
      | "rewind"
      | "setUp"
      | "skip"
      | "startHoax(address,uint256)"
      | "startHoax(address,address,uint256)"
      | "startHoax(address)"
      | "startHoax(address,address)"
      | "testInvestRevertOnMinEth"
      | "testLever"
      | "testOnFlashLoan"
      | "testVault"
      | "tip"
      | "vm"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bound",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deal(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deal(address,address,uint256,bool)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deal(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deployCode(string,bytes)",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "deployCode(string)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hoax(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hoax(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hoax(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hoax(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "leverUp",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewind",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "skip",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startHoax(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startHoax(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "startHoax(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "startHoax(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "testInvestRevertOnMinEth",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "testLever", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "testOnFlashLoan",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "testVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tip",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "vm", values?: undefined): string;

  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deal(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deal(address,address,uint256,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deal(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployCode(string,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployCode(string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hoax(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hoax(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hoax(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hoax(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "leverUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rewind", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "skip", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startHoax(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startHoax(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startHoax(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startHoax(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testInvestRevertOnMinEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testLever", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testOnFlashLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;

  events: {
    "WARNING_Deprecated(string)": EventFragment;
    "log(string)": EventFragment;
    "log_address(address)": EventFragment;
    "log_bytes(bytes)": EventFragment;
    "log_bytes32(bytes32)": EventFragment;
    "log_int(int256)": EventFragment;
    "log_named_address(string,address)": EventFragment;
    "log_named_bytes(string,bytes)": EventFragment;
    "log_named_bytes32(string,bytes32)": EventFragment;
    "log_named_decimal_int(string,int256,uint256)": EventFragment;
    "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
    "log_named_int(string,int256)": EventFragment;
    "log_named_string(string,string)": EventFragment;
    "log_named_uint(string,uint256)": EventFragment;
    "log_string(string)": EventFragment;
    "log_uint(uint256)": EventFragment;
    "logs(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WARNING_Deprecated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}

export interface WARNING_DeprecatedEventObject {
  msg: string;
}
export type WARNING_DeprecatedEvent = TypedEvent<
  [string],
  WARNING_DeprecatedEventObject
>;

export type WARNING_DeprecatedEventFilter =
  TypedEventFilter<WARNING_DeprecatedEvent>;

export interface logEventObject {
  arg0: string;
}
export type logEvent = TypedEvent<[string], logEventObject>;

export type logEventFilter = TypedEventFilter<logEvent>;

export interface log_addressEventObject {
  arg0: string;
}
export type log_addressEvent = TypedEvent<[string], log_addressEventObject>;

export type log_addressEventFilter = TypedEventFilter<log_addressEvent>;

export interface log_bytesEventObject {
  arg0: string;
}
export type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;

export type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;

export interface log_bytes32EventObject {
  arg0: string;
}
export type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;

export type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;

export interface log_intEventObject {
  arg0: BigNumber;
}
export type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;

export type log_intEventFilter = TypedEventFilter<log_intEvent>;

export interface log_named_addressEventObject {
  key: string;
  val: string;
}
export type log_named_addressEvent = TypedEvent<
  [string, string],
  log_named_addressEventObject
>;

export type log_named_addressEventFilter =
  TypedEventFilter<log_named_addressEvent>;

export interface log_named_bytesEventObject {
  key: string;
  val: string;
}
export type log_named_bytesEvent = TypedEvent<
  [string, string],
  log_named_bytesEventObject
>;

export type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;

export interface log_named_bytes32EventObject {
  key: string;
  val: string;
}
export type log_named_bytes32Event = TypedEvent<
  [string, string],
  log_named_bytes32EventObject
>;

export type log_named_bytes32EventFilter =
  TypedEventFilter<log_named_bytes32Event>;

export interface log_named_decimal_intEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_intEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_intEventObject
>;

export type log_named_decimal_intEventFilter =
  TypedEventFilter<log_named_decimal_intEvent>;

export interface log_named_decimal_uintEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_uintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_uintEventObject
>;

export type log_named_decimal_uintEventFilter =
  TypedEventFilter<log_named_decimal_uintEvent>;

export interface log_named_intEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_intEvent = TypedEvent<
  [string, BigNumber],
  log_named_intEventObject
>;

export type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;

export interface log_named_stringEventObject {
  key: string;
  val: string;
}
export type log_named_stringEvent = TypedEvent<
  [string, string],
  log_named_stringEventObject
>;

export type log_named_stringEventFilter =
  TypedEventFilter<log_named_stringEvent>;

export interface log_named_uintEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_uintEvent = TypedEvent<
  [string, BigNumber],
  log_named_uintEventObject
>;

export type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;

export interface log_stringEventObject {
  arg0: string;
}
export type log_stringEvent = TypedEvent<[string], log_stringEventObject>;

export type log_stringEventFilter = TypedEventFilter<log_stringEvent>;

export interface log_uintEventObject {
  arg0: BigNumber;
}
export type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;

export type log_uintEventFilter = TypedEventFilter<log_uintEvent>;

export interface logsEventObject {
  arg0: string;
}
export type logsEvent = TypedEvent<[string], logsEventObject>;

export type logsEventFilter = TypedEventFilter<logsEvent>;

export interface ZeroStateTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZeroStateTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;

    bound(
      x: PromiseOrValue<BigNumberish>,
      min: PromiseOrValue<BigNumberish>,
      max: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deal(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deal(address,address,uint256,bool)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      adjust: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deal(address,uint256)"(
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deployCode(string,bytes)"(
      what: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deployCode(string)"(
      what: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "hoax(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "hoax(address,address)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "hoax(address,address,uint256)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "hoax(address,uint256)"(
      who: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    leverUp(
      baseAmount: PromiseOrValue<BigNumberish>,
      borrowAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rewind(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    skip(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "startHoax(address,uint256)"(
      who: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "startHoax(address,address,uint256)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "startHoax(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "startHoax(address,address)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testInvestRevertOnMinEth(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testLever(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testOnFlashLoan(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testVault(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tip(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vm(overrides?: CallOverrides): Promise<[string]>;
  };

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  bound(
    x: PromiseOrValue<BigNumberish>,
    min: PromiseOrValue<BigNumberish>,
    max: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deal(address,address,uint256)"(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    give: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deal(address,address,uint256,bool)"(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    give: PromiseOrValue<BigNumberish>,
    adjust: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deal(address,uint256)"(
    to: PromiseOrValue<string>,
    give: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deployCode(string,bytes)"(
    what: PromiseOrValue<string>,
    args: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deployCode(string)"(
    what: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  failed(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "hoax(address)"(
    who: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "hoax(address,address)"(
    who: PromiseOrValue<string>,
    origin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "hoax(address,address,uint256)"(
    who: PromiseOrValue<string>,
    origin: PromiseOrValue<string>,
    give: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "hoax(address,uint256)"(
    who: PromiseOrValue<string>,
    give: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  leverUp(
    baseAmount: PromiseOrValue<BigNumberish>,
    borrowAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rewind(
    time: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUp(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  skip(
    time: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "startHoax(address,uint256)"(
    who: PromiseOrValue<string>,
    give: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "startHoax(address,address,uint256)"(
    who: PromiseOrValue<string>,
    origin: PromiseOrValue<string>,
    give: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "startHoax(address)"(
    who: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "startHoax(address,address)"(
    who: PromiseOrValue<string>,
    origin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testInvestRevertOnMinEth(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testLever(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testOnFlashLoan(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testVault(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tip(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    give: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vm(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    bound(
      x: PromiseOrValue<BigNumberish>,
      min: PromiseOrValue<BigNumberish>,
      max: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deal(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "deal(address,address,uint256,bool)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      adjust: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "deal(address,uint256)"(
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "deployCode(string,bytes)"(
      what: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "deployCode(string)"(
      what: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    "hoax(address)"(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "hoax(address,address)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "hoax(address,address,uint256)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "hoax(address,uint256)"(
      who: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    leverUp(
      baseAmount: PromiseOrValue<BigNumberish>,
      borrowAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    rewind(
      time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUp(overrides?: CallOverrides): Promise<void>;

    skip(
      time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "startHoax(address,uint256)"(
      who: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "startHoax(address,address,uint256)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "startHoax(address)"(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "startHoax(address,address)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    testInvestRevertOnMinEth(overrides?: CallOverrides): Promise<void>;

    testLever(overrides?: CallOverrides): Promise<void>;

    testOnFlashLoan(overrides?: CallOverrides): Promise<void>;

    testVault(overrides?: CallOverrides): Promise<void>;

    tip(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    vm(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "WARNING_Deprecated(string)"(msg?: null): WARNING_DeprecatedEventFilter;
    WARNING_Deprecated(msg?: null): WARNING_DeprecatedEventFilter;

    "log(string)"(arg0?: null): logEventFilter;
    log(arg0?: null): logEventFilter;

    "log_address(address)"(arg0?: null): log_addressEventFilter;
    log_address(arg0?: null): log_addressEventFilter;

    "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
    log_bytes(arg0?: null): log_bytesEventFilter;

    "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
    log_bytes32(arg0?: null): log_bytes32EventFilter;

    "log_int(int256)"(arg0?: null): log_intEventFilter;
    log_int(arg0?: null): log_intEventFilter;

    "log_named_address(string,address)"(
      key?: null,
      val?: null
    ): log_named_addressEventFilter;
    log_named_address(key?: null, val?: null): log_named_addressEventFilter;

    "log_named_bytes(string,bytes)"(
      key?: null,
      val?: null
    ): log_named_bytesEventFilter;
    log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;

    "log_named_bytes32(string,bytes32)"(
      key?: null,
      val?: null
    ): log_named_bytes32EventFilter;
    log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;

    "log_named_decimal_int(string,int256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;
    log_named_decimal_int(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;

    "log_named_decimal_uint(string,uint256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;
    log_named_decimal_uint(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;

    "log_named_int(string,int256)"(
      key?: null,
      val?: null
    ): log_named_intEventFilter;
    log_named_int(key?: null, val?: null): log_named_intEventFilter;

    "log_named_string(string,string)"(
      key?: null,
      val?: null
    ): log_named_stringEventFilter;
    log_named_string(key?: null, val?: null): log_named_stringEventFilter;

    "log_named_uint(string,uint256)"(
      key?: null,
      val?: null
    ): log_named_uintEventFilter;
    log_named_uint(key?: null, val?: null): log_named_uintEventFilter;

    "log_string(string)"(arg0?: null): log_stringEventFilter;
    log_string(arg0?: null): log_stringEventFilter;

    "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
    log_uint(arg0?: null): log_uintEventFilter;

    "logs(bytes)"(arg0?: null): logsEventFilter;
    logs(arg0?: null): logsEventFilter;
  };

  estimateGas: {
    IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;

    bound(
      x: PromiseOrValue<BigNumberish>,
      min: PromiseOrValue<BigNumberish>,
      max: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deal(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deal(address,address,uint256,bool)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      adjust: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deal(address,uint256)"(
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deployCode(string,bytes)"(
      what: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deployCode(string)"(
      what: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "hoax(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "hoax(address,address)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "hoax(address,address,uint256)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "hoax(address,uint256)"(
      who: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    leverUp(
      baseAmount: PromiseOrValue<BigNumberish>,
      borrowAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rewind(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    skip(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "startHoax(address,uint256)"(
      who: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "startHoax(address,address,uint256)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "startHoax(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "startHoax(address,address)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testInvestRevertOnMinEth(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testLever(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testOnFlashLoan(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testVault(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tip(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vm(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bound(
      x: PromiseOrValue<BigNumberish>,
      min: PromiseOrValue<BigNumberish>,
      max: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deal(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deal(address,address,uint256,bool)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      adjust: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deal(address,uint256)"(
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deployCode(string,bytes)"(
      what: PromiseOrValue<string>,
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deployCode(string)"(
      what: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "hoax(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "hoax(address,address)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "hoax(address,address,uint256)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "hoax(address,uint256)"(
      who: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    leverUp(
      baseAmount: PromiseOrValue<BigNumberish>,
      borrowAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rewind(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    skip(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "startHoax(address,uint256)"(
      who: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "startHoax(address,address,uint256)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "startHoax(address)"(
      who: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "startHoax(address,address)"(
      who: PromiseOrValue<string>,
      origin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testInvestRevertOnMinEth(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testLever(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testOnFlashLoan(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testVault(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tip(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      give: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
