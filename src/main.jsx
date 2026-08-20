import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppShell } from "./shared/layout/AppShell";
import { HomePage } from "./modules/home/pages/HomePage";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppShell><HomePage /></AppShell>
  </StrictMode>
);
