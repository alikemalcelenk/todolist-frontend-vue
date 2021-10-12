import { resolve } from 'path'

import env from './config/env'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'todolist-frontend-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/styles/main.scss'
  ],

  styleResources: {
    scss: ['~/assets/styles/selectors.scss', '~/assets/styles/variables.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/Elements', '~/components/Icons']
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: env.API_SERVICE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Storybook Configuration: https://storybook.nuxtjs.org
  storybook: {},

  alias: {
    '@Fonts': resolve(__dirname, './assets/fonts')
  },

  generate: {
    dir: 'dist'
  }
}
