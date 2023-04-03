import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@static": path.resolve(__dirname, "./src/static"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@mocks": path.resolve(__dirname, "./src/mocks/"),
      "@global": path.resolve(__dirname, "./src/global/"),
    },
  },
  plugins: [react()]
})
