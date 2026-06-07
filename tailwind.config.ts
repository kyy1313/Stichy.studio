import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg'],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: '#F5F5DC',
          50: '#FDFDF9',
          100: '#FAF8EB',
          200: '#F5F5DC',
          300: '#EBEBAF',
          400: '#E0E082',
        },
        terracotta: {
          DEFAULT: '#E2725B',
          400: '#E88C78',
          500: '#E2725B',
          600: '#D05A42',
        },
        olive: {
          DEFAULT: '#808000',
          500: '#808000',
          600: '#666600',
          800: '#333300',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
