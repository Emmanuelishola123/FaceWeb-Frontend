import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/context.";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <Layout>
        <App />
      </Layout>
    </ContextProvider>
  </BrowserRouter>
);
