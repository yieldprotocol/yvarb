import { App } from "./App";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ethers } from "ethers";

describe("App", () => {
  it("should tell the user to install an provider", () => {
    render(<App ethereum={undefined} />);
    expect(screen.getByText("No wallet detected.")).toBeInTheDocument();
  });

  describe("with an Ethereum injector", () => {
    let provider: ethers.providers.JsonRpcProvider;
    const overrideAddress = "0xefd67615d66e3819539021d40e155e1a6107f283";
    beforeAll(() => {
      provider = new ethers.providers.JsonRpcProvider(
        "https://rpc.tenderly.co/fork/709e6131-c453-468d-9512-ab55a416516d"
      );
    });

    it("shows a connect button", async () => {
      render(<App ethereum={provider} overrideAddress={overrideAddress} />);

      expect(
        screen.getByText("Please connect to your wallet.")
      ).toBeInTheDocument();

      const button = screen.getByText("Connect Wallet");
      expect(button).toBeInTheDocument();

      act(() => {
        button.click();
      });

      const balances = await screen.findAllByText(
        "Balance:",
        {},
        { timeout: 5000 }
      );
      expect(balances.length).toBe(2);
    }, 7000);
  });
});
