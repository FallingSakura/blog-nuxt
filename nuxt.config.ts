// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@vesp/nuxt-fontawesome',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  fontawesome: {
    icons: {
      solid: ['house', 'box-archive', 'images', 'circle-info',
        'question', 'search', 'angle-left'
      ],
    }
  },
  css: ['~/assets/css/media.css'],
})