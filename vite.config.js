import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sites } from "@openai/sites-vite-plugin";
import hostingConfig from "./.openai/hosting.json" with { type: "json" };

const PLACEHOLDER_DATABASE_ID = "00000000-0000-4000-8000-000000000000";

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
          d1_databases: hostingConfig.d1
            ? [{
                binding: hostingConfig.d1,
                database_name: "pesseghini-leads",
                database_id: PLACEHOLDER_DATABASE_ID
              }]
            : [],
          assets: {
            binding: "ASSETS",
            not_found_handling: "single-page-application",
            run_worker_first: ["/api/*"]
          }
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
