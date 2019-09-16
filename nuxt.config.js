const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: "width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" },

      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async:true}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ,
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css',
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~assets/style/stylus/app'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/totop', ssr: true },
    { src: '~plugins/vuetify', ssr: true },
    { src: '~plugins/ads.js', ssr: false },
    { src: '~plugins/axios', ssr: true },
    { src: '@/plugins/vue-mavon-editor', srr: false }


  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/device',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: '#3D4451',
      secondary: '#D7D7D7',
      accent: '#E8676B',
    }
  },
  /**
   * axuis config
   */
  axios: {
    baseURL: "http://api.aiisx.com"
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: { allChunks: true },
    /*
    ** You can extend webpack config here
    */
    loaders: {
      stylus: {
        import: [
          '~assets/style/stylus/variables',
          '~assets/style/stylus/mixins',
        ],
      },
    },
    extend(config, ctx) {
    }
  }
}
