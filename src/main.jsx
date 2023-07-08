import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../public/index.css";
import { Provider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
