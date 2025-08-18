import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   css: {
    postcss: './postcss.config.cjs' // ⬅️ this line is optional in most cases but add it just to be sure
  },
  server: {
  allowedHosts: ['.ngrok-free.app']
}
})
