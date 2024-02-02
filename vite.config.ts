/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src/"),
      "@assets": path.join(__dirname, "src/assets"),
      "@components": path.join(__dirname, "src/components"),
      "@utils": path.join(__dirname, "src/utils"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.test.ts", "**/*.test.tsx"],
    setupFiles: ["./src/setupTests.ts"],
  },
});
