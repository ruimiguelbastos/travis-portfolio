import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  define: {
    'process.env': process.env
  },
  server: {
    host: 'localhost',
    port: 3000
  }
})
