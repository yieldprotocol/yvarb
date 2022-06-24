import React, { useState } from "react";
import "./App.css";
import { ConnectWallet } from "./components/ConnectWallet";
import { Invest } from "./components/Invest";
import { emptyVaults, VaultsAndBalances } from "./objects/Vault";
// import VaultComponent from "./components/Vault";
import { Tabs } from "./components/Tabs";
import { ValueType } from "./components/ValueDisplay";
import { Contracts } from "./contracts";
import {
  Balances,
  FY_WETH,
  IERC20Address,
  loadBalance,
  WETH,
} from "./balances";
import { Signer, providers, BigNumber } from "ethers";
import { useEffect } from "react";

export interface Strategy {
  tokenAddresses: [IERC20Address, ValueType][];
  debtTokens: [IERC20Address, ValueType][];
  investToken: [IERC20Address, ValueType];
  lever: string;
}

enum StrategyName {
  WStEth,
}

const strategies: { [strat in StrategyName]: Strategy } = {
  [StrategyName.WStEth]: {
    tokenAddresses: [[WETH, ValueType.Weth]],
    debtTokens: [[FY_WETH, ValueType.FyWeth]],
    investToken: [FY_WETH, ValueType.FyWeth],
    lever: "0x8fc8cfb7f7362e44e472c690a6e025b80e406458",
  },
};

export const App: React.FunctionComponent = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<StrategyName>(
    StrategyName.WStEth
  );

  const [selectedAccount, setSelectedAccount] = useState<Signer>();
  const [vaults, setVaults] = useState<VaultsAndBalances>(emptyVaults());

  const [networkError, setNetworkError] = useState<string | undefined>();

  const contracts: Contracts = {};

  const [balances, setBalances] = useState<Balances>({});

  let provider: providers.Web3Provider | undefined;

  const connectWallet = async () => {
    if (
      window.ethereum.request === undefined ||
      window.ethereum.on === undefined
    )
      throw new Error();

    provider = new providers.Web3Provider(window.ethereum);

    // This method is run when the user clicks the Connect. It connects the
    // dapp to the user's wallet, and initializes it.

    // To connect to the user's wallet, we have to run this method.
    // It returns a promise that will resolve to the user's address.
    const [selectedAddress] = (await window.ethereum.request({
      method: "eth_requestAccounts",
    })) as string[];

    // Once we have the address, we can initialize the application.
    // TODO: Check the network
    setSelectedAccount(provider.getSigner(selectedAddress));

    // We reinitialize it whenever the user changes their account.
    window.ethereum.on("accountsChanged", ([newAddress]: [string]) => {
      // `accountsChanged` event can be triggered with an undefined newAddress.
      // This happens when the user removes the Dapp from the "Connected
      // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
      // To avoid errors, we reset the dapp state
      if (newAddress === undefined) {
        setSelectedAccount(undefined);
      } else {
        setSelectedAccount(window.ethereum.getSigner(newAddress));
      }
    });

    // We reset the dapp state if the network is changed

    window.ethereum.on("chainChanged", () => {
      stopPollingData();
      setSelectedAccount(undefined);
    });
  };

  let pollId: number | undefined = undefined;
  const startPollingData = () => {
    pollId = setInterval(() => { void pollData(); }, 1000) as any as number;
  };
  const stopPollingData = () => {
    clearInterval(pollId);
    pollId = undefined;
  };
  const pollData = async () => {
    if (selectedAccount === undefined)
      return;
    const strategy = strategies[selectedStrategy];
    const balances: Balances = {};
    for (const [address, ] of [...strategy.tokenAddresses, ...strategy.debtTokens])
      balances[address] = await loadBalance(address, contracts, selectedAccount);
    setBalances(balances);
  };

  useEffect(() => {
    startPollingData();
    return stopPollingData;
  });

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
  if (selectedAccount === undefined) {
    return (
      <ConnectWallet
        connectWallet={() => void connectWallet()}
        networkError={networkError}
        dismiss={() => setNetworkError(undefined)}
      />
    );
  }

  const vaultIds = Object.keys(vaults.vaults);

  const elements = [
    <Invest
      label="Invest"
      key="invest"
      contracts={contracts}
      account={selectedAccount}
      strategy={strategies[selectedStrategy]}
      balances={balances}
    />,
    /*...vaultIds.map((vaultId) => (
      <VaultComponent
        key={vaultId}
        label={"Vault: " + vaultId.substring(0, 8) + "..."}
        vaultId={vaultId}
        balance={this.state.vaults.balances[vaultId]}
        vault={this.state.vaults.vaults[vaultId]}
        pollData={() => this.pollData()}
        contracts={contracts}
      />
    )),*/
  ];

  return <Tabs>{elements}</Tabs>;
};