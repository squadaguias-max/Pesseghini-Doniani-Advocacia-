import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sites } from "@openai/sites-vite-plugin";

export default defineConfig(async ({ command }) => {
  const deploymentPlugins = [];

  if (command === "build") {
    const { cloudflare } = await import("@cloudflare/vite-plugin");
    deploymentPlugins.push(
      cloudflare({
        config: {
          name: "server",
          main: "./worker/index.js",
          compatibility_date: "2026-08-25",
          assets: { not_found_handling: "single-page-application" }
        }
      })
    );
  }

  return {
    plugins: [
      react(),
      sites(),
      ...deploymentPlugins
    ]
  };
});
