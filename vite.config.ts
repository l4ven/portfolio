import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    target: "esnext",
    assetsInlineLimit: 0,
    cssCodeSplit: true,
    minify: "esbuild",
  },
});
