import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/reboot.css";

import { Main } from "./pages/Main/Main";

ReactDOM.hydrate(<Main />, document.querySelector("#root"));
