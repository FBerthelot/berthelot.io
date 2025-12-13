import { defineConfig } from 'vite'
import 'vitest/config'
import vuePlugin from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vuePlugin()],
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

// import { defineConfig } from 'vitest/config'

// import path from 'path'

// export default defineConfig({
//   plugins: [
//     vuePlugin(),
//     // Components({
//     //   dirs: ['./components'],
//     //   deep: true,
//     //   directoryAsNamespace: true,
//     // }),
//   ],
//   test: {
//     globals: true,

//     environment: 'jsdom',

//     exclude: [
//       '**/node_modules/**',
//       '**/.nuxt/**',
//       '**/.output/**',
//       '**/dist/**',
//       '**/cypress/**',
//       '**/.{idea,git,cache,output,temp}/**',
//       '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
//     ],
//   },

// resolve: {
//   alias: {
//     ['~']: path.resolve(__dirname, './'),
//   },
// },
// })
