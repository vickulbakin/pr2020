import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import "./styles/reboot.css";

import { App } from "./App";

const renderMethod = !document.getElementById("root").childNodes.length
  ? ReactDOM.render
  : ReactDOM.hydrate;

renderMethod(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
