require('dotenv').config();

module.exports = {
  srcDir: 'client/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mad Devs: Software & Mobile App Development Company',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: '1cce4e9bf6ebcdff' },
      { ref: 'canonical', href: 'https://maddevsgroup.co.uk' },
      { ref: 'canonical', href: 'https://maddevsgroup.uk' },
      { ref: 'canonical', href: 'https://maddevs.uk' },
      { ref: 'canonical', href: 'https://www.maddevs.io' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'sitemap', type: 'application/xml', href: 'https://maddevs.io/sitemap.xml' }
    ],
    script: [
      {
        src: 'https://widget.clutch.co/static/js/widget.js'
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(
          {
            '@context': 'http://www.schema.org',
            '@type': 'Organization',
            'name': 'Mad Devs Group LTD - Custom Software Development Company',
            'url': 'https://maddevs.io',
            'logo': 'https://maddevs.io/Open-Graph.png',
            'foundingDate': '2016',
            'email': 'team@maddevs.io',
            'description': 'Mad Devs Group LTD is a software development company headquartered in Cambridge (UK), which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Salisbury House, Station Road',
              'addressLocality': 'Cambridge',
              'addressRegion': 'UK',
              'postalCode': 'CB12LA'
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'contactType': 'customer service',
              'telephone': '+442039848555'
            },
            'sameAs': [             
              'https://www.facebook.com/maddevsllc',      
              'http://www.linkedin.com/company/mad-devs',
              'https://blog.maddevs.io',
              'https://clutch.co/profile/mad-devs',
              'https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm',
              'https://twitter.com/MadDevsIO',
              'https://www.instagram.com/maddevsio',
              'https://www.crunchbase.com/organization/mad-devs',
              'https://github.com/maddevsio',
              'https://www.behance.net/maddevs'
            ] 
          }
        )
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#ec1c24',
    height: '3px'
  },
  plugins: [
    '~/plugins/vee-validate.js',
    '~/plugins/vue2-perfect-scrollbar.js',
    {
      src: '~/plugins/vue-js-modal.js',
      ssr: false
    }
  ],
  generate: {
    routes: [
      '/',
      '/services',
      '/projects',
      '/careers',
      '/gdpr',
      '/nda',
      '/privacy'
    ]
  },
  css: [
    {
      src: '~/assets/styles/index.scss',
      lang: 'scss'
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    followSymlinks: true,
    cache: true,
    transpile: ['vee-validate/dist/rules'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    '@nuxtjs/robots',
    'nuxt-lazy-load'
  ],
  gtm: {
    id: 'GTM-NNKVRF3',
    enabled: true
  },
  axios: {
    baseURL: process.env.NODE_API_URL
  },
  robots: {
    UserAgent: '*',
    Disallow: ['/gdpr', '/privacy', '/nda'],
    Sitemap: 'https://maddevs.io/sitemap.xml'
  }
};

