module.exports = {
  types: [
    { value: 'feat', name: '✨ feat:      New feature' },
    { value: 'fix', name: '🐛 fix:       Bug fix' },
    { value: 'refactor', name: '♻️ refactor: Code refactor' },
    { value: 'perf', name: '⚡ perf:      Performance improvements' },
    { value: 'style', name: '🎨 style:     Styles / formatting' },
    { value: 'docs', name: '📝 docs:      Documentation' },
    { value: 'test', name: '✅ test:      Tests' },
    { value: 'chore', name: '🔧 chore:     Tooling / config' },
    { value: 'build', name: '🚀 build:     Build system' },
    { value: 'ci', name: '👷 ci:        CI/CD changes' }
  ],

  scopes: [
    // UI
    'ui',
    'layout',
    'components',
    'styles',
    'theme',
    'icons',
    'fonts',

    // E-commerce core
    'product',
    'products',
    'variant',
    'collection',
    'collections',
    'catalog',
    'cart',
    'checkout',
    'order',
    'orders',
    'inventory',
    'pricing',
    'discount',
    'promotion',

    // Customer
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

    // Architecture
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
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100
}
