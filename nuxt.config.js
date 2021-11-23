

export default {
  target:'static',
  router: {
    base:'/sitelv/'
  },
  head: {
    title: 'Laurent Villate - Images et illustrations originales à la gouache',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Laurent Villate explore les univers urbains et le patrimoine des villes d\'Europe et d\'Asie.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300;500&family=Roboto:wght@300&display=swap"
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap"
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap"
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
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'laurent.villate@yahoo.com',
      },
      smtp: {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "b4cd4fb64eb790",
          pass: "bfe1e1afdd2d09"
        }
      },
    }],
    [
      '@nuxtjs/i18n',
      {
        defaultLocale: 'fr',
        locales: [
          {
            code: 'en',
            file: 'en-EN.js',
            name: 'English'
          },
          {
            code: 'fr',
            file: 'fr-FR.js',
            name: 'Français'
          },
        ],
        lazy: true,
        langDir: "lang/",
      },
    ]
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: {
    color: 'orange',
    height: '5px'
  }
}
