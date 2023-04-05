import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
// eslint-disable-next-line import/no-named-as-default
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
