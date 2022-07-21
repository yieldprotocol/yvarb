/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "./common";

export interface IJoinFactoryInterface extends utils.Interface {
  functions: {
    "createJoin(address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "createJoin"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createJoin",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "createJoin", data: BytesLike): Result;

  events: {
    "JoinCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "JoinCreated"): EventFragment;
}

export interface JoinCreatedEventObject {
  asset: string;
  pool: string;
}
export type JoinCreatedEvent = TypedEvent<
  [string, string],
  JoinCreatedEventObject
>;

export type JoinCreatedEventFilter = TypedEventFilter<JoinCreatedEvent>;

export interface IJoinFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJoinFactoryInterface;

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
    createJoin(
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createJoin(
    asset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createJoin(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "JoinCreated(address,address)"(
      asset?: PromiseOrValue<string> | null,
      pool?: null
    ): JoinCreatedEventFilter;
    JoinCreated(
      asset?: PromiseOrValue<string> | null,
      pool?: null
    ): JoinCreatedEventFilter;
  };

  estimateGas: {
    createJoin(
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createJoin(
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
