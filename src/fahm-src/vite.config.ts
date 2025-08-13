import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fahm/',
  build: {
    outDir: path.resolve(__dirname, "../../fahm"), 
    emptyOutDir: true, 
  },
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
