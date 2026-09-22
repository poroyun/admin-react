import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // json-server의 DB 저장으로 앱이 새로고침되어 페이지 상태가 초기화되는 것을 방지
      ignored: ['**/db.json'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    }
  },
})
