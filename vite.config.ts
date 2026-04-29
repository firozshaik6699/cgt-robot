import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // Separate Spline into its own async chunk so it doesn't block initial page load
    rollupOptions: {
      output: {
        manualChunks: {
          'spline-runtime': ['@splinetool/runtime', '@splinetool/react-spline'],
          'framer': ['framer-motion'],
        },
      },
    },
    // Suppress chunk size warnings for Spline (it's inherently large but lazy-loaded)
    chunkSizeWarningLimit: 2500,
  },
})
