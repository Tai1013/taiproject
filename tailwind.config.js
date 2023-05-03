/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  safelist: [
    { pattern: /(delay|animate|router-link)-./ }
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        md: '1rem'
      }
    }
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
    require('tailwindcss-animated')
  ]
}
