import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { VitePWAOptions } from "vite-plugin-pwa";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

const pwaOptions: Partial<VitePWAOptions> = {
  injectRegister: "auto",
  registerType: "autoUpdate",
  includeAssets: ["logo.png", "logo.svg", "favicon.ico"],
  manifest: {
    name: "Toolbox",
    short_name: "Toolbox",
    start_url: ".",
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [
      {
        src: "favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "icons/icon-x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        src: "icons/icon-x72.png",
        type: "image/png",
        sizes: "72x72",
      },
      {
        src: "icons/icon-x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        src: "icons/icon-x128.png",
        type: "image/png",
        sizes: "128x128",
      },
      {
        src: "icons/icon-x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "icons/icon-x384.png",
        type: "image/png",
        sizes: "384x384",
      },
      {
        src: "icons/icon-x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
};
export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePWA(pwaOptions)],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ["antd"],
          "pro-components": ["@ant-design/pro-components"],
          ace: ["ace-builds", "react-ace"],
          "json-editor": ["vanilla-jsoneditor"],
          "md-editor":["@ant-design/md-editor"]
        },
      },
    },
  },
  server: {
    host: true,
  },
});
