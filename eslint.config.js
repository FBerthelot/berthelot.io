import { createConfigForNuxt } from '@nuxt/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'
import vitest from '@vitest/eslint-plugin'

export default createConfigForNuxt([
  eslintPluginPrettierRecommended,
  ...vueI18n.configs.recommended,
  {
    settings: {
      'vue-i18n': {
        localeDir: './locales/*.json',
      },
    },
    rules: {
      '@intlify/vue-i18n/no-duplicate-keys-in-locale': 'error',
      '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',
      '@intlify/vue-i18n/no-unknown-locale': 'error',
      '@intlify/vue-i18n/no-unused-keys': 'error',
      '@intlify/vue-i18n/prefer-sfc-lang-attr': 'error',
    },
  },
])
  .append({
    rules: {
      'vue/html-self-closing': 'off',
    },
  })
  .prepend([
    {
      plugins: {
        vitest,
      },
      rules: {
        ...vitest.configs.recommended.rules,
      },
      languageOptions: {
        globals: {
          ...vitest.environments.env.globals,
        },
      },
    },
  ])
