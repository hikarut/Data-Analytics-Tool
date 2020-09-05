// import constant from './config/constant.json'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Data Analytics Tool',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'データサイエンティスト,データアナリスト,データエンジニア,データ分析,ツール',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'データ分析ツール',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://yahoo.co.jp/',
      },
      { hid: 'og:title', property: 'og:title', content: 'Data Analytics Tool' },
      { hid: 'og:url', property: 'og:url', content: 'https://yahoo.co.jp/' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'データ分析ツール',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'application-name',
        content: 'Data Analytics Tool',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Data Analytics Tool',
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
  css: [{ src: '~assets/scss/bluma.scss', lang: 'scss' }],

  styleResources: {
    scss: ['~/assets/scss/common.scss'],
  },
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
    // extend(config: any, ctx: any) {},
  },
}
