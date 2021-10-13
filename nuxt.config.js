export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sitelv',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:"https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300;500&family=Roboto:wght@300&display=swap"
      },
      {
        rel: 'stylesheet',
        href:"https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap"
      },
      {
        rel: 'stylesheet',
        href:"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap"
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/i18n',
      { 
        defaultLocale: 'fr',
        locales: [
          {
            code: 'en', 
            file: 'en-EN.js',
            name: 'EN'
          },
          {
            code: 'fr',
            file: 'fr-FR.js',
            name: 'FR'
          },
            ],
        lazy: true,
        langDir: "lang/", 
      }
    ]      
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
