import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Ensure this is exactly '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
