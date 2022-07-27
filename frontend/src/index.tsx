import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./App";
import { ethers, providers } from "ethers";

ReactDOM.render(
  <React.StrictMode>
    <App
      ethereum={
        window.ethereum === undefined
          ? undefined
          : new providers.Web3Provider(window.ethereum)
      }
    />
  </React.StrictMode>,
  document.getElementById("root")
);
