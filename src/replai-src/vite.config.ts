import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/replai/",
  build: {
    outDir: "build",
  },
  server: {
    proxy: {
      "/api": {
        target: "https://alefba-backend.darkube.app",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
