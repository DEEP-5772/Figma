/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        head:['Playfair Display'],
        primary:['Playfair Display SC']
      }
    },
  },
  plugins: [],
}
