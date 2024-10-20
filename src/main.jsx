import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Import sans accolades pour un export par défaut
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
