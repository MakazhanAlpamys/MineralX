import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // Keep the frontend in the client/ directory
  root: path.resolve(import.meta.dirname, "client"),
  // Output to client/dist (default for Vite); relative to root
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
