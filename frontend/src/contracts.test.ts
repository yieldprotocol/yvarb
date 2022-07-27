/**
 * @jest-environment node
 */

import * as ganache from "ganache";
import { BigNumber, ethers, Signer } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";
import { getContract, getFyToken, getFyTokenAddress, getPool, WETH } from "./contracts";
import { SeriesId } from "./balances";

describe("contracts", () => {
  const contracts = { current: {} };
  let ganacheProvider: ganache.EthereumProvider;
  let signer: Signer;

  beforeAll(() => {
    ganacheProvider = ganache.provider({
      logging: { quiet: true },
      fork: { network: "mainnet" },
    });
    const provider = new ethers.providers.Web3Provider(
      ganacheProvider as unknown as ExternalProvider
    );
    signer = provider.getSigner();
  });

  afterAll(async () => {
    await ganacheProvider.disconnect();
  });

  describe("getContract", () => {
    it("should get a contract correctly", async () => {
      const weth = getContract(WETH, contracts, signer);
      const allowance = await weth.balanceOf(await signer.getAddress());
      expect(allowance).toBeInstanceOf(BigNumber);
    });
  });

  describe("getFyTokenAddress", () => {
    it("should get an address correctly", async () => {
      const address = await getFyTokenAddress(
        "0x303230370000" as SeriesId,
        contracts,
        signer
      );
      expect(address).toBe("0x53C2a1bA37FF3cDaCcb3EA030DB3De39358e5593");
    });
  });

  describe("getFyToken", () => {
    it("should get a token contract correctly", async () => {
      const token = await getFyToken(
        "0x303230370000" as SeriesId,
        contracts,
        signer
      );
      const balance = await token.balanceOf(await signer.getAddress());
      expect(balance).toBeInstanceOf(BigNumber);
    });
  });

  describe("getPool", () => {
    it("should get the pool correctly", async () => {
      const pool = await getPool(
        "0x303230370000" as SeriesId,
        contracts,
        signer
      );
      const balance = await pool.balanceOf(await signer.getAddress());
      expect(balance).toBeInstanceOf(BigNumber);
    });
  });
});
