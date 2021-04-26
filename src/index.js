import React from "react";
import ReactDOM from "react-dom";
import App from "../src/views/App";
import ApiContextProvider from "../src/context/ApiContext";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

ReactDOM.render(
  <ApiContextProvider>
    {" "}
    <App />
  </ApiContextProvider>,
  document.getElementById("root")
);
