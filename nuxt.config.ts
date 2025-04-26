import axios from 'axios'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.scss',
  ],
  build: {
    transpile: ['@nuxtjs/eslint-module'],
  },
  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
  ],
  runtimeConfig: {
    public: {
      axios: {
        baseURL: 'https://dummyjson.com',
      },
    },
  },
  cache: {
    useHostPrefix: false,
  },
  static: {
    prefix: '/_nuxt',
  },
})
