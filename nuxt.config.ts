import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  sourcemap: false,

  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    'nuxt-yandex-metrika',
    'shadcn-nuxt',
  ],

  devServer: {
    host: process.env.NUXT_SERVER_HOST || '0.0.0.0',
    port: Number(process.env.NUXT_SERVER_PORT) || 3000,
  },

  css: ['~/assets/fonts/inter.css', '~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },

  site: {
    name: 'Fullstack Developer',
    url: process.env.NUXT_PUBLIC_SITE_URL || '',
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
      posthogKey: process.env.NUXT_PUBLIC_POSTHOG_KEY || '',
      posthogHost: process.env.NUXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
    },
  },

  sitemap: {
    zeroRuntime: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
    storageKey: 'theme',
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'ru',
    langDir: 'locales',
    locales: [
      { code: 'ru', name: 'Русский', language: 'ru-RU', file: 'ru.json' },
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      fallbackLocale: 'ru',
      redirectOn: 'root',
    },
    vueI18n: './i18n.config.ts',
  },

  yandexMetrika: {
    id: process.env.NUXT_PUBLIC_YANDEX_METRIKA_ID || '',
    debug: process.env.NODE_ENV !== 'production',
    // delay: 0,
    // cdn: false,
    verification: process.env.NUXT_PUBLIC_YANDEX_METRIKA_VERIFICATION || '',
    options: {
      webvisor: true,
      clickmap: true,
    },
  },
})
