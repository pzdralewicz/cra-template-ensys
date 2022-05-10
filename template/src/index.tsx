import React from "react";
import ReactDOM from "react-dom";
import { LicenseManager } from "ag-grid-enterprise";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./index.css";

if (process.env.REACT_APP_AG_GRID_KEY)
  LicenseManager.setLicenseKey(process.env.REACT_APP_AG_GRID_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
