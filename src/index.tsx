import * as React from "react";
import { render } from "react-dom";
import Router from "./components/Router.js";

import "./styles.css";

const rootElement = document.getElementById("root");
render(<Router />, rootElement);
