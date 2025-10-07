import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/d37ta-portfolio/',   // 리포지토리 이름과 정확히 동일
})
