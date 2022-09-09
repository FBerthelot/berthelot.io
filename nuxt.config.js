import axios from 'axios'
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/'
loadLanguages(['jsx'])

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

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
    i18n: 'en',
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
    routes: async () => {
      const { data: invitations } = await axios.get(
        'https://sheetdb.io/api/v1/yd2k17v9irxae?sheet=Invitations'
      )

      return [
        '/articles/react-test-refactoring-snapshot',
        ...invitations.flatMap((invitation) => [
          `/mariage/${invitation["Id de l'invitation"]}`,
          `en/mariage/${invitation["Id de l'invitation"]}`,
        ]),
      ]
    },
  },
}
