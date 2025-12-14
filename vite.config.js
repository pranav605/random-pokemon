import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Critical for deployed apps (not localhost)
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
