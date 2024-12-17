import { defineConfig, preview } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Netflix-Clone-2024-Vite-/",
  // server:{
  //   port:5000,
  // }
})
