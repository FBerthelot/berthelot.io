import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/'
import { invitations } from './components/mariage/00_shared/finalInvitations.data'
loadLanguages(['jsx'])

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    MAPS_URL: process.env.NUXT_ENV_MAPS_URL,
    FIREBASE_API_KEY: process.env.NUXT_ENV_FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID:
      process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.NUXT_ENV_FIREBASE_APP_ID,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'berthelot.io',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/markdownit',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://berthelot.io',
    gzip: true,

    exclude: ['/mariage/**/*', '/en/mariage/**/*'],
    i18n: true,
    locales: ['en', 'fr'],

    routes: ['/slides/javascript.html', '/slides/afterwork.html'],
  },
  robots: {
    UserAgent: '*',
    Disallow: ['mariage/*', 'en/mariage/*'],
    Sitemap: 'https://berthelot.io/sitemap.xml',
  },

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'fr',
    },
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-footnote', 'markdown-it-ins', 'markdown-it-emoji'],
    highlight(str, lang) {
      return Prism.highlight(str, Prism.languages[lang], lang)
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    routes: () => {
      return [
        '/articles/react-test-refactoring-snapshot',
        ...invitations.flatMap((invitation) => [
          `/mariage/${invitation.id}`,
          `en/mariage/${invitation.id}`,
          `/mariage/${invitation.id}/answer`,
          `en/mariage/${invitation.id}/answer`,
        ]),
      ]
    },
  },
}
