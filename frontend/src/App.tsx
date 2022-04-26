import React from "react";
import "./App.css";
import { BigNumber, ethers } from "ethers";
import { ConnectWallet } from "./components/ConnectWallet";
import erc20Abi from "./abi/ERC20.json";
import Invest from "./components/Invest";
import poolAbi from "./abi/Pool.json";
import cauldronAbi from "./abi/Cauldron.json";
import ladleAbi from "./abi/Ladle.json";
import { emptyVaults, Vaults } from "./objects/Vault";
import VaultComponent from "./components/Vault";
import { Tabs } from "./components/Tabs";
import { ContractContext as ERC20 } from "./abi/ERC20";
import { ContractContext as YieldLever } from "./generated/abi/YieldLever";
import { ContractContext as Pool } from "./abi/Pool";
import { ContractContext as Cauldron } from "./abi/Cauldron";
import { ContractContext as Ladle } from "./abi/Ladle";
import yieldLeverAbi from "./generated/abi/YieldLever.json";
import yieldLeverDeployed from "./generated/deployment.json";

const YIELD_LEVER_CONTRACT_ADDRESS: string = yieldLeverDeployed.deployedTo;
const USDC_ADDRESS: string = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const POOL_CONTRACT: string = "0xEf82611C6120185D3BF6e020D1993B49471E7da0";
const CAULDRON_CONTRACT: string = "0xc88191F8cb8e6D4a668B047c1C8503432c3Ca867";
const LADLE_CONTRACT: string = "0x6cB18fF2A33e981D1e38A663Ca056c0a5265066A";

const YEARN_STRATEGY: string = '0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE';

export const SERIES_ID: string = "0x303230360000";
export const ILK_ID: string = "0x303900000000";

interface State {
  selectedAddress?: string;
  networkError?: string;
  usdcBalance?: BigNumber;
  vaults: Vaults;
  yearn_apy?: number;
}

export interface Contracts {
  usdcContract: ERC20;
  yieldLeverContract: YieldLever;
  poolContract: Pool;
  cauldronContract: Cauldron;
  ladleContract: Ladle;
}

export class App extends React.Component<{}, State> {
  private readonly initialState: State;

  private _provider?: ethers.providers.Web3Provider;

  private pollId?: number;

  private contracts?: Contracts;

  private vaultsToMonitor: string[] = [];

  constructor(properties: {}) {
    super(properties);
    this.initialState = {
      selectedAddress: undefined,
      usdcBalance: undefined,
      vaults: emptyVaults(),
    };
    this.state = this.initialState;
  }

  render() {
    // Ethereum wallets inject the window.ethereum object. If it hasn't been
    // injected, we instruct the user to install MetaMask.
    if (window.ethereum === undefined) {
      return <p>No wallet detected.</p>;
    }

    // The next thing we need to do, is to ask the user to connect their wallet.
    // When the wallet gets connected, we are going to save the users's address
    // in the component's state. So, if it hasn't been saved yet, we have
    // to show the ConnectWallet component.
    //
    // Note that we pass it a callback that is going to be called when the user
    // clicks a button. This callback just calls the _connectWallet method.
    if (!this.state.selectedAddress) {
      return (
        <ConnectWallet
          connectWallet={() => this._connectWallet()}
          networkError={this.state.networkError}
          dismiss={() => this._dismissNetworkError()}
        />
      );
    }

    if (this.state.usdcBalance === undefined || this.contracts === undefined) {
      return <p>Loading</p>;
    }

    const contracts = this.contracts;

    const vaultIds = Object.keys(this.state.vaults.vaults);

    const elements = [
      <Invest
        key="invest"
        label="Invest"
        usdcBalance={this.state.usdcBalance}
        contracts={this.contracts}
        account={this.state.selectedAddress}
        yearnApi={this.state.yearn_apy}
      />,
      ...vaultIds.map((vaultId) => (
        <VaultComponent
          key={vaultId}
          label={"Vault: " + vaultId.substring(0, 8) + "..."}
          vaultId={vaultId}
          balance={this.state.vaults.balances[vaultId]}
          vault={this.state.vaults.vaults[vaultId]}
          pollData={() => this.pollData()}
          contracts={contracts}
        />
      )),
    ];

    return <Tabs>{elements}</Tabs>;
  }

  async _connectWallet() {
    // This method is run when the user clicks the Connect. It connects the
    // dapp to the user's wallet, and initializes it.

    // To connect to the user's wallet, we have to run this method.
    // It returns a promise that will resolve to the user's address.
    const [selectedAddress] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // Once we have the address, we can initialize the application.

    // First we check the network
    if (!this._checkNetwork()) {
      return;
    }

    this._initialize(selectedAddress);

    // We reinitialize it whenever the user changes their account.
    window.ethereum.on("accountsChanged", ([newAddress]: [string]) => {
      this._stopPollingData();
      // `accountsChanged` event can be triggered with an undefined newAddress.
      // This happens when the user removes the Dapp from the "Connected
      // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
      // To avoid errors, we reset the dapp state
      if (newAddress === undefined) {
        return this._resetState();
      }

      this._initialize(newAddress);
    });

    // We reset the dapp state if the network is changed
    window.ethereum.on("chainChanged", ([networkId]: [string]) => {
      this._stopPollingData();
      this._resetState();
    });
  }

  _initialize(userAddress: string) {
    // This method initializes the dapp

    // We first store the user's address in the component's state
    this.setState({
      selectedAddress: userAddress,
    });

    // Then, we initialize ethers, fetch the token's data, and start polling
    // for the user's balance.

    // Fetching the token data and the user's balance are specific to this
    // sample project, but you can reuse the same initialization pattern.
    this._initializeEthers();
    this._startPollingData();
  }

  async _initializeEthers() {
    // We first initialize ethers by creating a provider using window.ethereum
    this._provider = new ethers.providers.Web3Provider(window.ethereum);
    this.contracts = {
      usdcContract: new ethers.Contract(
        USDC_ADDRESS,
        erc20Abi,
        this._provider.getSigner(0)
      ) as any,
      yieldLeverContract: new ethers.Contract(
        YIELD_LEVER_CONTRACT_ADDRESS,
        yieldLeverAbi.abi,
        this._provider.getSigner(0)
      ) as any,
      poolContract: new ethers.Contract(
        POOL_CONTRACT,
        poolAbi,
        this._provider.getSigner(0)
      ) as any,
      cauldronContract: new ethers.Contract(
        CAULDRON_CONTRACT,
        cauldronAbi,
        this._provider
      ) as any,
      ladleContract: new ethers.Contract(
        LADLE_CONTRACT,
        ladleAbi,
        this._provider
      ) as any,
    };

    // if (this.state.selectedAddress !== undefined)
    //    loadVaults(this.contracts.cauldronContract, this.state.selectedAddress, this._provider);

    const vaultsBuiltFilter =
      this.contracts.cauldronContract.filters.VaultBuilt(
        null,
        this.state.selectedAddress,
        null
      );
    const vaultsReceivedFilter =
      this.contracts.cauldronContract.filters.VaultGiven(
        null,
        this.state.selectedAddress
      );
    this.contracts.cauldronContract.on(vaultsBuiltFilter, (vaultId: string) =>
      this.addVault(vaultId)
    );
    this.contracts.cauldronContract.on(
      vaultsReceivedFilter,
      (vaultId: string) => this.addVault(vaultId)
    );

    await this._startPollingData();
  }

  // This is an utility method that turns an RPC error into a human readable
  // message.
  _getRpcErrorMessage(error: { data?: { message: string }; message: string }) {
    if (error.data) {
      return error.data.message;
    }

    return error.message;
  }

  // This method resets the state
  _resetState() {
    this.setState(this.initialState);
  }

  _checkNetwork() {
    // TODO: Really check network
    return true;
  }

  _dismissNetworkError() {}

  private async _startPollingData() {
    this.pollId = setInterval(() => this.pollData(), 1000) as any;
  }

  private async pollData() {
    if (
      this.contracts !== undefined &&
      this._provider !== undefined &&
      this.state.selectedAddress !== undefined
    ) {
      const { cauldronContract } = this.contracts;
      const [usdcBalance, ...vaultAndBalances] = await Promise.all([
        this.contracts.usdcContract.balanceOf(this.state.selectedAddress),
        ...this.vaultsToMonitor.map((vaultId: string) =>
          Promise.all([
            cauldronContract.vaults(vaultId),
            cauldronContract.balances(vaultId),
          ])
        ),
      ]);
      const vaults = Object.create(null);
      const balances = Object.create(null);
      this.vaultsToMonitor.forEach((vaultId, i) => {
        if (vaultAndBalances[i] !== undefined) {
          vaults[vaultId] = vaultAndBalances[i][0];
          balances[vaultId] = vaultAndBalances[i][1];
        }
      });

      const yearnResponse = await fetch('https://api.yearn.finance/v1/chains/1/vaults/all');
      const yearnStrategies: any[] = await yearnResponse.json();
      const strategy = yearnStrategies.find((strat) => strat.address === YEARN_STRATEGY);
      const yearn_apy = strategy.apy.net_apy as number;

      this.setState({
        usdcBalance,
        vaults: {
          vaults,
          balances,
        },
        yearn_apy
      });
    }
  }

  private _stopPollingData() {
    clearInterval(this.pollId);
  }

  private async addVault(vaultId: string) {
    if (!this.vaultsToMonitor.includes(vaultId))
      this.vaultsToMonitor.push(vaultId);
    await this.pollData();
  }
}

export default App;