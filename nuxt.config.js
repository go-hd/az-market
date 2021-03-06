export default {
  ssr: false,
  trailingSlash: true,
  head: {
    titleTemplate: 'AZ Market',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/wzh1ssz.css' }
    ]
  },

  env: {
    shopName: process.env.SHOP_NAME || 'AZ Market'
  },

  router: {
    base: process.env.NODE_ENV === 'production' ? '/gold/import-garden/' : '/'
  }
}