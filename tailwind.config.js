import typography from '@tailwindcss/typography'
import scrollbar from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
        },
        muted: {
          DEFAULT: 'var(--text-color-muted)',
        },
        disabled: {
          DEFAULT: 'var(--text-color-disabled)',
        },
      },
    },
  },
  plugins: [typography, scrollbar({ nocompatible: true })],
}
