import { defineNuxtConfig } from 'nuxt/config'
import { invitations } from './components/mariage/01_shared/finalInvitations.data'

export default defineNuxtConfig({
  devServer: {
    port: 5000,
  },

  ssr: true,

  site: {
    url: 'https://berthelot.io',
  },

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

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
  ],

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
    baseUrl: process.env.NUXT_ENV_BASE_URL,
    defaultLocale: 'fr',
    compilation: {
      strictMessage: false,
    },
  },

  content: {
    highlight: {
      theme: 'github-light',
    },
  },

  robots: {
    disallow: ['/mariage/', '/en/mariage/'],
    allow: ['/mariage/design', '/en/mariage/design', '/mariage', '/en/mariage'],
  },

  routeRules: {
    '/mariage/**': { index: false },
    '/mariage/': { index: true },
    '/mariage/design': { index: true },
  },

  sitemap: {
    urls: async () => {
      return [
        {
          lastmod: new Date('2023/11/19'),
          loc: '/articles/react-test-refactoring-snapshot',
        },
        {
          lastmod: new Date('2020/06/04'),
          loc: '/en/articles/react-test-refactoring-snapshot',
        },
      ]
    },
  },

  generate: {
    routes: [
      '/slides/javascript',
      ...invitations.flatMap((invitation) => [
        `/mariage/${invitation.id}`,
        `/en/mariage/${invitation.id}`,
        `/mariage/${invitation.id}/answer`,
        `/en/mariage/${invitation.id}/answer`,
      ]),
    ],
  },

  compatibilityDate: '2025-04-16',
})
