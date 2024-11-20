/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      purple: {
        600: '#504cdc',
        300: '#a4a8f7',
        200: '#e1e6f9',
        100: '#6f71b0'
      }
    },
  },
  plugins: [],
}
