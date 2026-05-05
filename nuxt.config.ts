// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-03',
  devtools: { enabled: true },
  srcDir: 'app',
  vite: {
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia']
    },
    ssr: {
      noExternal: ['vue', 'vue-router', 'pinia']
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxt/icon',
    '@nuxt/fonts'
  ],
  css: ['~/assets/styles/main.scss'],
  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
      { code: 'uk', name: 'Українська', language: 'uk-UA', file: 'uk.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: '../i18n/locales'
  },
  sitemap: {
    autoLastmod: true,
    xslColumns: [
      { label: 'URL', width: '70%' },
      { label: 'Last Modified', width: '30%' }
    ]
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal']
    }
  }
})
