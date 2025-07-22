import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Resurgence",
        short_name: "RSRGNC",
        start_url: "/",
        display: "standalone",
        background_color: "#d1d5db",
        theme_color: "#374151",
        icons: [
          {
            src: "/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
})
