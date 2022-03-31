export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Cuvantul Zilei Shop",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/images/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/static/css/bootstrap.min.css",
    "@/static/css/variables.css",
    "@/static/css/animate.css",
    "@/static/css/lineicons.css",
    "@/static/css/helpers.css",
    "@/static/css/premium.css",
    "@/static/css/index.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "@/static/js/vendor/jquery-1.12.4.min.js",
    // "@/static/js/popper.min.js",
    // "@/static/js/bootstrap.min.js",
    // "@/static/js/jquery.appear.min.js",
    // "@/static/js/jquery.easing.min.js",
    // "@/static/js/scrolling-nav.js",
    // "@/static/js/main.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/google-fonts",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  googleFonts: {
    families: {
      Roboto: true,
      'Barlow+Condensed': {
        wght: [100, 400, 800],
      },
      'Asap+Condensed': {
        wght: [400, 700],
      },
    },
    prefetch: true,
    preload: true
  },
  googleAnalytics: {
    id: 'G-9HB9C073KC'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
