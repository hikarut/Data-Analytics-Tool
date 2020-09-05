import constant from './config/constant.json'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: constant.TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: constant.KEYWORD },
      {
        hid: 'description',
        name: 'description',
        content: constant.DESCRIPTION,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${constant.URL}/ogimage.png`,
      },
      { hid: 'og:title', property: 'og:title', content: constant.TITLE },
      { hid: 'og:url', property: 'og:url', content: constant.URL },
      {
        hid: 'og:description',
        property: 'og:description',
        content: constant.DESCRIPTION,
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'application-name',
        content: constant.APPLICATION_NAME,
      },
      {
        name: 'apple-mobile-web-app-title',
        content: constant.APPLICATION_NAME,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0a0716', height: '5px' },
  /*
   ** Global CSS
   */
  // css: [{ src: '~assets/css/main.scss', lang: 'scss' }],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: [
  //   { src: '~/plugins/ga.js', mode: 'client' },
  //   { src: '~/plugins/lazyload.js', mode: 'client' }
  // ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', '@nuxtjs/sitemap'],

  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
