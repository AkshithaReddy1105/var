export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap',
        },
      ],
      meta: [
        { name: 'theme-color', content: '#0d2137' },
        { property: 'og:site_name', content: 'Ahalada Rao.V & Associates - Company Secretaries' },
        { property: 'og:type', content: 'website' },
      ],
    },
    // No page transition — avoids blank-page-on-navigate issue in Nuxt 3
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // TEST: using Akshita's email. Switch to 'mail@ahaladaroassociates.com' before going live.
    contactEmail: process.env.CONTACT_EMAIL ?? 'akshitareddybanala@gmail.com',
    smtpHost: process.env.SMTP_HOST ?? '',
    smtpPort: process.env.SMTP_PORT ?? '587',
    smtpUser: process.env.SMTP_USER ?? '',
    smtpPass: process.env.SMTP_PASS ?? '',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://ahaladaroassociates.com',
      phone: '040-27623101',
      whatsapp: '917075927041',
      email: 'mail@ahaladaroassociates.com',
      address: 'Flat No. 113, Sri Datta Sai Commercial Complex, RTC Cross Roads, Musheerabad, Hyderabad – 500020',
    },
  },

  nitro: {
    preset: 'vercel',
    compressPublicAssets: true,
  },

  image: {
    quality: 80,
    format: ['webp', 'jpg'],
  },

  compatibilityDate: '2024-12-30',
})
