const environment = process.env.NODE_ENV || 'dev'
const conf = require(`./config/constant.${environment}.json`)

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
          'データサイエンティスト,データアナリスト,データエンジニア,データ分析,ツール,ノーコード',
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
        content: `${conf.url}/ogimage.png`,
      },
      { hid: 'og:title', property: 'og:title', content: 'Data Analytics Tool' },
      { hid: 'og:url', property: 'og:url', content: conf.url },
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
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

  /*
   ** env
   */
  env: {
    conf: conf,
  },

  /*
   ** sitemap作成オプション
   */
  sitemap: {
    // path: '/sitemap.xml',
    hostname: conf.url,
    generate: true,
    exclude: ['/404', 'ads.txt'],
  },
}
