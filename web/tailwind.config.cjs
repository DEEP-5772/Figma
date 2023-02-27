/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        head:['Playfair Display'],
        primary:['Playfair Display SC']
      }
    },
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin")],
}
