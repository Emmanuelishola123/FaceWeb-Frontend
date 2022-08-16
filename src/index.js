import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layer from "./components/Layer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Layer>
      <App />
    </Layer>
  </BrowserRouter>,
);
