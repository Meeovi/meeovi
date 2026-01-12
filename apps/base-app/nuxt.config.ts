import {
  defineNuxtConfig
} from "nuxt/config";
import {
  useLayers
} from 'nuxt-layers-utils'
import {
  generateRuntimeConfig
} from "./server/utils/runtimeConfig";
//import tsconfigPaths from 'vite-tsconfig-paths'

const layers = useLayers(__dirname, {
  auth: '../layers/auth',
  commerce: '../layers/commerce',
  social: '../layers/social',
  lists: '../layers/lists',
  departments: '../layers/departments',
  shared: '../layers/shared',
  search: '../layers/search',
  dashboard: '../layers/seller-dashboard',
  chat: '../layers/chat',
})

export default defineNuxtConfig({
  extends: layers.extends(),
  alias: layers.alias('#'),

  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      templateParams: {
        separator: '·',
      },
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{
        name: 'description',
        content: 'Base Application for Meeovi Framework'
      }],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        }
      ]
    }
  },

  appConfig: {
    titleSuffix: '',
  },

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    //'@fortawesome/fontawesome-svg-core/styles.css',
    'assets/styles/dashboard.css',
    'assets/styles/mobile.css',
    'assets/styles/styles.css',
  ],

  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/leaflet',
    '@storefront-ui/nuxt',
    'nuxt-tiptap-editor',
    'vuetify-nuxt-module',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    "nuxt-security",
    '@nuxtjs/seo',
    'nuxt-toast'
  ],

  security: {
    headers: {
      contentSecurityPolicy: false,
      strictTransportSecurity: {
        maxAge: 0
      },
      crossOriginOpenerPolicy: false,
      crossOriginEmbedderPolicy: false,
      permissionsPolicy: false
    }
  },

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'fa-svg',
        svg: {
          fa: {
            libraries: [
              [ /* default export? */ false, /* export name */ 'fas', /* library */ '@fortawesome/free-solid-svg-icons']
            ]
          }
        },
        sets: [{
          name: 'mdi',
          cdn: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
        }]
      }
    }
  },

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en-GB",
    detectBrowserLanguage: false,
    langDir: "./src/langs/",
    vueI18n: "./config",
    locales: [{
        code: "en-GB",
        language: "en-GB",
        file: "en-GB.ts",
      },
      {
        code: "pl-PL",
        language: "pl-PL",
        file: "pl-PL.ts",
      },
      {
        code: "testde",
        language: "de-DE",
        file: "de-DE.ts",
        localeId: "c19b753b5f2c4bea8ad15e00027802d4",
      },
    ],
  },

  runtimeConfig: generateRuntimeConfig(),

  image: {
    provider: 'directus',
    directus: {
      baseURL: `${process.env.DIRECTUS_URL}/assets/`
    }
  },

  build: {},

  vite: {
    plugins: [
      /*tsconfigPaths()*/
    ],
  },

  nitro: {
    prerender: {
      routes: ['/assets/images/*']
    },
    compressPublicAssets: true,
    storage: {
      redis: {
        driver: 'redis',
        port: 6379,
        host: process.env.REDIS_HOST || '',
        password: process.env.REDIS_PASSWORD || ''
      }
    },
    experimental: {
      websocket: true
    }
  },

  compatibilityDate: '2025-02-22'
})
