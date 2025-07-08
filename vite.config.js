import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        ws: true, // Add WebSocket support if needed
        configure: (proxy) => {
          proxy.on("error", (err) => {
            console.log("Proxy error:", err);
          });
          proxy.on("proxyReq", (proxyReq) => {
            console.log("Proxying request to:", proxyReq.path);
          });
        },
      },
    },
    // Remove allowedHosts unless you're specifically using Cloudflare tunnel
    // allowedHosts: ["one-columbus-climate-biblical.trycloudflare.com"],
  },
});
