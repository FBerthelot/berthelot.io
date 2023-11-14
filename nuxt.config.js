import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devServer: {
    port: 5000,
  },
  ssr: true,

  runtimeConfig: {
    public: {
      MAPS_URL: process.env.NUXT_ENV_MAPS_URL,
      FIREBASE_API_KEY: process.env.NUXT_ENV_FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID:
        process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.NUXT_ENV_FIREBASE_APP_ID,
    },
  },

  modules: ['@nuxtjs/i18n', '@nuxt/content'],

  i18n: {
    locales: [
      {
        code: 'fr',
        name: 'FR',
        iso: 'fr-FR',
        isCatchallLocale: true,
      },
      {
        code: 'en',
        iso: 'en-GB',
        name: 'EN',
      },
    ],
    defaultLocale: 'fr',
    baseUrl: process.env.BASE_URL,
    compilation: {
      strictMessage: false,
    },
  },

  content: {
    highlight: {
      theme: 'github-light',
    },
  },
})

// export default defineNuxtConfig({

//   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
//   buildModules: [
//     // https://go.nuxtjs.dev/eslint
//     '@nuxtjs/eslint-module',
//   ],

//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//     '@nuxtjs/i18n',
//     '@nuxtjs/markdownit',
//     '@nuxtjs/robots',
//     '@nuxtjs/sitemap',
//   ],

//   sitemap: {
//     hostname: 'https://berthelot.io',
//     gzip: true,

//     exclude: ['/mariage/**/*', '/en/mariage/**/*'],
//     i18n: true,
//     locales: ['en', 'fr'],

//     routes: ['/slides/javascript.html', '/slides/afterwork.html'],
//   },
//   robots: {
//     UserAgent: '*',
//     Disallow: ['mariage/*', 'en/mariage/*'],
//     Sitemap: 'https://berthelot.io/sitemap.xml',
//   },

//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {},

//   generate: {
//     routes: () => {
//       return [
//         '/articles/react-test-refactoring-snapshot',
//         ...invitations.flatMap((invitation) => [
//           `/mariage/${invitation.id}`,
//           `en/mariage/${invitation.id}`,
//           `/mariage/${invitation.id}/answer`,
//           `en/mariage/${invitation.id}/answer`,
//         ]),
//       ]
//     },
//   },
// })
