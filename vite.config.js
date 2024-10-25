import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Resume-ReactJS/', // Update this to match your repository name
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000
  }


})
