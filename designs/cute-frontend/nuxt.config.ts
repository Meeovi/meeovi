import {
  defineNuxtConfig
} from "nuxt/config"
import vuetify, {
  transformAssetUrls
} from 'vite-plugin-vuetify'
import vsharp from 'vite-plugin-vsharp'
import dotenv from 'dotenv'

dotenv.config()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  experimental: {
    watcher: 'parcel'
  },

  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{
        name: 'description',
        content: 'Look expensive for less'
      }, ],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css'
        },
      ],
      script: [{
        src: `${process.env.NUXT_PUBLIC_COMMENTS_URL}/comments/embed.js`,
        async: true
      }, ],
    },
  },

  appConfig: {
    titleSuffix: 'ShopnCute',
  },

  css: [
    'video.js/dist/video-js.css',
    'videojs-share/dist/videojs-share.css',
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/tether/tether.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'assets/commerce/css/ui.css',
    'assets/styles/styles.css',
  ],

  modules: [
    "@nuxt/image",
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    "@storefront-ui/nuxt",
    '@nuxtjs/leaflet',
    '@nuxtjs/algolia',
    //'@nuxtjs/i18n',
    "nuxt-security",
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({
          autoImport: true
        }))
      })
    },
  ],

  /*auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: 'http://localhost:3011/api/auth',
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'email',
      addDefaultCallbackUrl: true
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    }
  },*/

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

  // https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/prisma-nuxt-module#configuration
  /* prisma: {
    installCli: false,
    installClient: false,
    generateClient: false,
    formatSchema: false,
    installStudio: false,
    autoSetupPrisma: true
  },

 i18n: {
  strategy: "prefix_except_default",
  defaultLocale: "en-GB",
  detectBrowserLanguage: false,
  langDir: "./src/langs/",
  vueI18n: "./config",
  locales: [
    {
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
},*/

  runtimeConfig: {
    // Cloudflare Turnstile
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    public: {
      // Algolia
      algolia: {
        apiKey: process.env.ALGOLIA_API_KEY,
        applicationId: process.env.ALGOLIA_APPLICATION_ID,
        globalIndex: process.env.ALGOLIA_INDEX_NAME,
        lite: true,
        cache: false,
        instantSearch: {
          theme: 'algolia'
        },
        useFetch: false,
        crawler: {
          apiKey: process.env.ALGOLIA_CRAWLER_ID || '',
          indexName: process.env.ALGOLIA_INDEX_NAME || '',
          meta: ['title', 'description'],
          include: () => true
        },
        recommend: true,
      },
      
      // JWT Secret
      jwtSecret: process.env.JWT_SECRET,

      // Directus
      directus: {
        url: process.env.NUXT_DIRECTUS_URL,
        auth: {
          email: process.env.NUXT_DIRECTUS_EMAIL,
          password: process.env.NUXT_DIRECTUS_ADMIN_PASSWORD,
          token: process.env.NUXT_DIRECTUS_STATIC_TOKEN
        }
      },

      vendureUrl: process.env.VENDURE_URL,
      vendureToken: process.env.VENDURE_TOKEN,

      // Stripe
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    },
  },

  build: {
    transpile: [
      'vuetify',
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify']
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  nitro: {
    prerender: {
      routes: [
        '/assets/images/*',
      ]
    },
  },

  compatibilityDate: '2025-02-22',
})