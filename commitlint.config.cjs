module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        // UI
        'ui',
        'layout',
        'components',
        'styles',
        'theme',
        'icons',

        // E-commerce core
        'product',
        'products',
        'variant',
        'collection',
        'catalog',
        'cart',
        'checkout',
        'order',
        'orders',
        'inventory',
        'pricing',
        'discount',
        'promotion',

        // User
        'auth',
        'account',
        'profile',
        'customer',

        // Discovery
        'search',
        'filter',
        'sorting',
        'recommendations',

        // Content
        'cms',
        'blog',
        'pages',
        'navigation',

        // Storefront architecture
        'store',
        'state',
        'composables',
        'services',
        'utils',
        'middleware',
        'plugins',

        // API
        'api',
        'graphql',
        'rest',
        'proxy',

        // Localization
        'i18n',
        'locale',
        'currency',

        // SEO
        'seo',
        'sitemap',
        'metadata',
        'structured-data',

        // Performance
        'performance',
        'images',
        'lazyload',
        'cache',
        'core',

        // Analytics
        'analytics',
        'tracking',
        'ga4',
        'events',

        // Infrastructure
        'config',
        'infra',
        'deployment',
        'docker',
        'cloudflare',
        'workers',
        'edge',

        // Development
        'build',
        'ci',
        'test',
        'e2e',
        'lint',
        'format',
        'deps',

        // Docs
        'docs'
      ]
    ]
  }
}
