// import { BrowserRouter } from "react-router-dom";

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// ✅ correct ID passed
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);