import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      external: ['/frontend/src/main.jsx'],
  },
},
  plugins: [react()]
})

