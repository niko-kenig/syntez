import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Загружаем env-переменные в зависимости от режима
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [react()],
    server: {
      open: true,
    },
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(env.VITE_BASE_URL || '/'),
    },
  }
})
