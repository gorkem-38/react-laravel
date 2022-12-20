import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
