import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, '.') },
      { find: 'components', replacement: resolve(__dirname, 'components') },
      { find: 'ui', replacement: resolve(__dirname, 'components/ui') },
      { find: 'lib', replacement: resolve(__dirname, 'lib') },
    ],
  },
})
