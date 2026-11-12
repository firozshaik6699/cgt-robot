import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: 'es2020',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'spline-runtime': ['@splinetool/runtime', '@splinetool/react-spline'],
          'framer': ['framer-motion'],
          'icons': ['lucide-react', 'react-icons/si'],
        },
      },
    },
    chunkSizeWarningLimit: 2500,
  },
})
