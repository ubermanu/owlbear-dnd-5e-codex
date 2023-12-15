import typography from '@tailwindcss/typography'

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
      },
    },
  },
  plugins: [typography],
}
