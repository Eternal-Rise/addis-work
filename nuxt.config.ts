// eslint-disable-next-line no-unused-vars
import { Configuration } from '@nuxt/types';
import i18n from './configs/i18n.config';
const config: Configuration = async (): Promise<Configuration> => ({
  mode: 'universal',
  /*
   ** Headers of the page
   */

  generate: {
    fallback: '404.html',
    subFolders: false,
  },

  server: {
    port: 3333,
  },

  head: {
    title: 'Addis Work beta version 1.0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/breadcrumbs' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },

  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss'],
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    host:
      process.env.NODE_ENV === 'development'
        ? 'localhost'
        : 'api.addis-work.softrize.com',
    port: process.env.NODE_ENV === 'development' ? '3000' : '80',
    https: true,
    credentials: false,
  },

  i18n: await i18n(),

  router: {
    middleware: ['breadcrumbs' /*, 'navigation', 'auth'*/],
  },

  // auth: {
  //   redirect: {
  //     login: '/',
  //     logout: '/',
  //     callback: '/',
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: '/auth/login',
  //           method: 'post',
  //           propertyName: 'accessToken',
  //         },
  //         logout: true,
  //         user: { url: '/auth/user', method: 'get', propertyName: false },
  //       },
  //       tokenRequired: true,
  //       tokenType: 'bearer',
  //     },
  //   },
  // },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      ctx;
    },
  },
});

export default config;
