import { ValueDisplay, ValueType } from "./ValueDisplay";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BigNumber, utils } from "ethers";
import { AssetId } from "../objects/Strategy";

describe("ValueDisplay", () => {
  it("should display values correctly", () => {
    render(
      <ValueDisplay
        value={utils.parseUnits("126.34", "ether")}
        valueType={ValueType.Balance}
        token={AssetId.WEth}
        label={"Label:"}
      />
    );
    expect(screen.getByText("Label:")).toBeInTheDocument();
    expect(screen.getByText("126.340000 WETH")).toBeInTheDocument();
  });

  it("should display USDC values correctly", () => {
    render(
      <ValueDisplay
        value={BigNumber.from("10000000")}
        valueType={ValueType.Balance}
        token={AssetId.Usdc}
        label={"Another label:"}
      />
    );
    expect(screen.getByText("Another label:")).toBeInTheDocument();
    expect(screen.getByText("10.00 USDC")).toBeInTheDocument();
  });

  it("should display literal values correctly", () => {
    render(
      <ValueDisplay
        value={"Literal!"}
        valueType={ValueType.Literal}
        label={"Label:"}
      />
    );
    expect(screen.getByText("Label:")).toBeInTheDocument();
    expect(screen.getByText("Literal!")).toBeInTheDocument();
  });
});
