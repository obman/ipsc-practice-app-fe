// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/_base.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
      '@pinia/nuxt'
  ],

  runtimeConfig: {
    apiDomain: process.env.API_DOMAIN,
    apiBaseUrl: process.env.API_BASE_URL,
    apiUrl: process.env.API_BASE_URL + process.env.API_URL,
    public: {}
  },

  app: {
    head: {
      title: 'IPSC Practice App',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'icon', type: 'manifest', href: '/site.webmanifest' }
      ]
    },
  }
})