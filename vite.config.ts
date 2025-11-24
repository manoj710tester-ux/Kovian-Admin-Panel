import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow external connections (mobile access)
    port: 5173, // Default Vite port
    strictPort: false, // Allow port fallback if 5173 is busy
    hmr: {
      host: "0.0.0.0", // Enable HMR for external connections
    },
  },
});
