import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/plugins/**/*.{js,ts}',
    './app/composables/**/*.{js,ts}',
    './app/services/**/*.{js,ts}',
    './app/utils/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          dark: 'var(--color-brand-dark)',
          hover: 'var(--color-brand-hover)',
          accent: 'var(--color-accent)'
        },
        state: {
          online: 'var(--color-online)'
        },
        base: {
          white: 'var(--color-white)',
          black: 'var(--color-black)'
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          'on-dark': 'var(--color-text-on-dark)',
          'on-accent': 'var(--color-text-on-accent)'
        },
        bg: {
          base: 'var(--color-bg-base)',
          soft: 'var(--color-bg-soft)',
          elevated: 'var(--color-bg-elevated)'
        },
        surface: {
          DEFAULT: 'var(--color-ui-surface)',
          strong: 'var(--color-ui-surface-strong)'
        },
        ui: {
          border: 'var(--color-ui-border)',
          'border-light': 'var(--color-ui-border-light)'
        }
      },
      fontFamily: {
        sans: ['var(--font-family-primary)'],
        display: ['var(--font-family-display)'],
        base: ['var(--font-family-base)'],
        heading: ['var(--font-family-heading)'],
        regular: ['var(--font-family-regular)'],
        medium: ['var(--font-family-medium)'],
        semibold: ['var(--font-family-semibold)'],
        bold: ['var(--font-family-bold)']
      },
      fontSize: {
        xs: ['var(--font-size-xs)', { lineHeight: '1.4' }],
        sm: ['var(--font-size-sm)', { lineHeight: '1.45' }],
        base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-base)' }],
        md: ['var(--font-size-md)', { lineHeight: 'var(--line-height-base)' }],
        lg: ['var(--font-size-lg)', { lineHeight: 'var(--line-height-body)' }],
        xl: ['var(--font-size-xl)', { lineHeight: '1.35' }],
        '2xl': [
          'var(--font-size-2xl)',
          { lineHeight: '1.25', letterSpacing: 'var(--letter-spacing-tight)' }
        ],
        '3xl': [
          'var(--font-size-3xl)',
          { lineHeight: '1.15', letterSpacing: 'var(--letter-spacing-tight)' }
        ],
        '4xl': [
          'var(--font-size-4xl)',
          { lineHeight: '1.05', letterSpacing: 'var(--letter-spacing-tight)' }
        ],
        '5xl': [
          'var(--font-size-5xl)',
          { lineHeight: '1', letterSpacing: 'var(--letter-spacing-tight)' }
        ],
        '6xl': [
          'var(--font-size-6xl)',
          { lineHeight: '1', letterSpacing: 'var(--letter-spacing-tight)' }
        ],
        '7xl': [
          'var(--font-size-7xl)',
          { lineHeight: 'var(--line-height-xl)', letterSpacing: 'var(--letter-spacing-tight)' }
        ],
        '8xl': [
          'var(--font-size-8xl)',
          { lineHeight: '1', letterSpacing: 'var(--letter-spacing-tight)' }
        ]
      },
      maxWidth: {
        container: 'var(--container-width)'
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        pill: 'var(--radius-pill)'
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
        elevated: 'var(--shadow-elevated)'
      },
      zIndex: {
        base: 'var(--z-base)',
        sticky: 'var(--z-sticky)',
        header: 'var(--z-header)',
        dropdown: 'var(--z-dropdown)',
        overlay: 'var(--z-overlay)',
        modal: 'var(--z-modal)',
        toast: 'var(--z-toast)'
      },
      screens: {
        sm: '26.875rem',
        md: '48rem',
        lg: '80rem',
        xl: '108rem',
        '2xl': '108rem'
      }
    }
  }
}
