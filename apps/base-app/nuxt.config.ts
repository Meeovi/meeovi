import type {
  NuxtPage
} from "nuxt/schema";
import {
  resolve
} from "node:path";
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
          name: 'apple-mobile-web-app-title',
          content: process.env.NUXT_PUBLIC_SITE_NAME || 'Base Application'
        },
        {
          name: 'description',
          content: `${process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'Base Application'}`
        }
      ],
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
    titleSuffix: `${process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'Base Application'}`,
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
    'assets/styles/main.css',
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
    '@nuxtjs/turnstile',
    'nuxt-toast',
    '@formkit/nuxt'
  ],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
    configFile: './config/formkit.config.ts',
  },

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
    vueI18n: "./config/i18n.config.ts",
    baseUrl: process.env.NUXT_APP_URL,
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

  hooks: {
    'pages:extend': function (pages) {
      const pagesToRemove: NuxtPage[] = []
      pages.forEach((page) => {
        if (page.path.includes('component') || page.path.includes('/api')) {
          pagesToRemove.push(page)
        }
      })

      pagesToRemove.forEach((page: NuxtPage) => {
        pages.splice(pages.indexOf(page), 1)
      })
      // Uncomment to show current Routes
      // console.log(`\nCurrent Routes:`)
      // console.log(pages)
      // console.log(`\n`)
    }
  },

  turnstile: {
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '',
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
    preset: process.env.NUXT_NITRO_PRESET,
    rollupConfig: {
      external: process.env.NUXT_NITRO_PRESET != 'node-server' ? ['pg-native'] : undefined
    },
    publicAssets: process.env.NUXT_APP_STORAGE === 'local' ? [{
      dir: resolve(process.env.NUXT_LOCAL_UPLOAD_DIR || './uploads'),
      baseURL: process.env.NUXT_LOCAL_PUBLIC_PATH || '/uploads'
    }] : undefined,
    compressPublicAssets: true,
    storage: {
      redis: {
        driver: 'redis',
        port: 6379,
        host: process.env.REDIS_HOST || '',
        password: process.env.REDIS_PASSWORD || ''
      }
    },
    externals: {
      external: [
        '@prisma/client',
        '.prisma',
        'prisma/generated'
      ]
    }
  },
  $production: {
    build: {
      transpile: ['zod', '@polar-sh']
    }
  },

  compatibilityDate: '2025-02-22'
})
