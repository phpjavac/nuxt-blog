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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ,
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
<<<<<<< HEAD
  css: ['~assets/style/stylus/app'],
  /*
  ** Plugins to load before mounting the App
  */
  proxy: [
    ['/api', { target: 'http://localhost:3003' }]
  ],
  plugins: [
    { src: '~plugins/totop', ssr: true },
    { src: '~plugins/vuetify', ssr: true }

  ],
=======
 css: ['~assets/style/stylus/app'],
  /*
  ** Plugins to load before mounting the App
  */
 proxy: [
  ['/api', { target: 'http://localhost:3003' }]
],
 Plugins:[
  '~plugins/axios',
  '~plugins/vuetify'
 ],
>>>>>>> c11345e2f3f09b22a9a7715e5b5c6388c62a02e2
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
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
  /*
  ** Build configuration
  */
  build: {
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
