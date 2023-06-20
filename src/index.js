import React from "react";
import { createRoot } from "react-dom/client";

//styles
import "./index.css";

//components
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <App />
  </div>
);
