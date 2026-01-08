import {
  defineNuxtConfig
} from "nuxt/config";

export default defineNuxtConfig({
  extends: [],
  alias: {},

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
        content: 'Shared Application for Meeovi Framework'
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

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    //'@fortawesome/fontawesome-svg-core/styles.css',
    'assets/styles/mobile.css',
    'assets/styles/styles.css',
  ],

  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/mcp-toolkit',
    '@nuxtjs/leaflet',
    '@storefront-ui/nuxt',
    'nuxt-tiptap-editor',
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    'vuetify-nuxt-module',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    "nuxt-security",
    '@nuxtjs/seo',
  ],

  mcp: {
    name: 'Meeovi MCP Server',
    version: '1.0.0'
  },

  commerce: {
    provider: 'magento', // or 'directus'
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

  runtimeConfig: {
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY
    },
    public: {
      NUXT_PROJECT_ID: process.env.NUXT_PROJECT_ID,
      NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
      rocketChatUrl: process.env.NUXT_PUBLIC_ROCKETCHAT_URL,
      minioEndpoint: process.env.MINIO_ENDPOINT,
      minioUser: process.env.MINIO_USER,
      minioPass: process.env.MINIO_PASS,

      // Directus
      directus: {
        url: process.env.DIRECTUS_URL,
        nuxtBaseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        auth: {
          email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
          password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
          token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
          enabled: true,
          enableGlobalAuthMiddleware: false, // Enable auth middleware on every page
          userFields: ['*'], // Select user fields
          redirect: {
            login: '/auth/login', // Path to redirect when login is required
            logout: '/', // Path to redirect after logout
            home: '/', // Path to redirect after successful login
            resetPassword: '/auth/reset-password', // Path to redirect for password reset
            callback: '/auth/callback', // Path to redirect after login with provider
          },
        }
      },

      // Search (Elasticsearch / Searchkit or MeiliSearch) - set at runtime or via environment
      search: {
        // Example: 'https://your-search-host:9243' or MeiliSearch host
        host: process.env.NUXT_PUBLIC_SEARCH_HOST,
        // Example: 'your_api_key'
        apiKey: process.env.NUXT_PUBLIC_SEARCH_API_KEY,
      },

      supabase: {
        url: process.env.SUPABASE_URL || '',
        key: process.env.SUPABASE_KEY || ''
      },

      commerceUrl: process.env.COMMERCE_STORE_URL,
      commerceGraphql: process.env.COMMERCE_GRAPHQL_URL,
      commerceApiToken: process.env.WEBSITE_TOKEN,

      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,
      // Cloudflare Turnstile
      turnstile: {
        // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
        // environment variable.
        secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
      },
      // Server
      stripe: {
        key: process.env.STRIPE_SECRET_KEY,
      },

      // Commerce
      commerce: {
        magentoEndpoint: process.env.MAGE_MAGENTO_GRAPHQL_URL || '',
        magentoToken: process.env.MAGE_MAGENTO_TOKEN || '',
      },

      ups: {
        apiKey: process.env.UPS_API_KEY,
        apiUrl: process.env.UPS_API_URL || 'https://onlinetools.ups.com/api'
      },

      fedex: {
        apiKey: process.env.FEDEX_API_KEY,
        apiUrl: process.env.FEDEX_API_URL
      },

      dhl: {
        apiKey: process.env.DHL_API_KEY,
        apiUrl: process.env.DHL_API_URL
      },

      payments: {
        enabledProviders: process.env.PAYMENT_PROVIDERS?.split(',') || ['stripe', 'offline'],
        defaultProvider: process.env.DEFAULT_PAYMENT_PROVIDER || 'stripe',
        currency: process.env.DEFAULT_CURRENCY || 'USD'
      },
    },
    paypal: {
      clientId: process.env.PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_CLIENT_SECRET,
      sandbox: process.env.PAYPAL_SANDBOX === 'true'
    },
  },

  image: {
    provider: 'directus',
    directus: {
      baseURL: `${process.env.DIRECTUS_URL}/assets/`
    }
  },

  build: {
    transpile: [
      'vuetify',
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      // Ensure Nuxt itself is not bundled into the server SSR bundle.
      // Bundling `nuxt` can cause Vite's impound plugin to encounter
      // Vue app aliases (e.g. `#build/...`) in the server runtime.
      noExternal: ['vuetify']
    },
    logLevel: 'info',
    plugins: []
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
