import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppShell } from "./shared/layout/AppShell";
import { HomePage } from "./modules/home/pages/HomePage";
import { PrivacyPolicyPage } from "./modules/privacy/pages/PrivacyPolicyPage";
import "./styles/index.css";

const normalizedPath = window.location.pathname.replace(/\/$/, "") || "/";
const CurrentPage = normalizedPath === "/politica-de-privacidade" ? PrivacyPolicyPage : HomePage;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppShell><CurrentPage /></AppShell>
  </StrictMode>
);
