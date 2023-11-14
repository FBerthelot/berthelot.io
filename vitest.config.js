import vuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
import Components from 'unplugin-vue-components/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    vuePlugin(),
    Components({
      dirs: ['./components'],
      deep: true,
      directoryAsNamespace: true,
    }),
  ],
  test: {
    globals: true,

    environment: 'jsdom',
  },
  resolve: {
    alias: {
      ['~']: path.resolve(__dirname, './'),
    },
  },
})
