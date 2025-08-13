import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "../../fahm"), // دو پوشه عقب‌تر + پوشه fahm
    emptyOutDir: true, // قبل از بیلد فولدر رو خالی می‌کنه
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
