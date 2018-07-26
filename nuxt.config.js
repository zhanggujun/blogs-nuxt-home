module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '微微下雨天',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: ['~/assets/css/reset.styl','~/assets/css/public.styl'],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios']
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy:true
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8891',
      pathRewrite: {'^/api':''}
    }
  }
}

