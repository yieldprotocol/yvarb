import { App } from "./App";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ethers, utils } from "ethers";

describe("App", () => {
  it("should tell the user to install an provider", () => {
    render(<App ethereum={undefined} />);
    expect(screen.getByText("No wallet detected.")).toBeInTheDocument();
  });

  describe("with an Ethereum injector", () => {
    let provider: ethers.providers.JsonRpcProvider;
    const overrideAddress = "0xefd67615d66e3819539021d40e155e1a6107f283";
    let snap: string | undefined;
    beforeAll(async () => {
      provider = new ethers.providers.JsonRpcProvider(
        "https://rpc.tenderly.co/fork/709e6131-c453-468d-9512-ab55a416516d"
      );
      snap = (await provider.send("evm_snapshot", [])) as string;
    });

    afterEach(async () => {
      await provider.send("evm_revert", [snap]);
    });

    it("shows a connect button", async () => {
      render(<App ethereum={provider} overrideAddress={overrideAddress} />);

      expect(
        screen.getByText("Please connect to your wallet.")
      ).toBeInTheDocument();

      const button = screen.getByText("Connect Wallet");
      expect(button).toBeInTheDocument();
    }, 7000);

    describe("after connecting", () => {
      beforeEach(() => {
        render(<App ethereum={provider} overrideAddress={overrideAddress} />);
        const button = screen.getByText("Connect Wallet");
        act(() => {
          button.click();
        });
      });

      it("should have balances", async () => {
        const balances = await screen.findAllByText(
          "Balance:",
          {},
          { timeout: 10000 }
        );
        expect(balances.length).toBe(2);
      }, 10000);

      it("should have working debug buttons", async () => {
        const signer = provider.getSigner();
        const ethBalance = await provider.getBalance(await signer.getAddress());
        const button = await screen.findByDisplayValue(
          "Fund Eth (Tenderly testing)",
          {},
          { timeout: 10000 }
        );

        // Click twice on the button
        act(() => {
          button.click();
        });
        await new Promise((r) => setTimeout(r, 2000));
        act(() => {
          button.click();
        });

        const newBalance = await provider.getBalance(await signer.getAddress());
        // Expect our balance to have been updated
        expect(newBalance.sub(ethBalance)).toStrictEqual(
          utils.parseUnits("200", "ether")
        );
      }, 20000);
    });
  });
});
