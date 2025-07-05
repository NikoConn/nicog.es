import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 👈 base raíz, necesario para dominios personalizados
  plugins: [react()],
})
