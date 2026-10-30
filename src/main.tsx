import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { images } from "./assets/images";
import "./styles/tokens.css";
import "./styles/base.css";

const icon = document.querySelector("link[rel='icon']");

if (!icon) {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = images.logo.src;
  document.head.appendChild(link);
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element was not found.");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
