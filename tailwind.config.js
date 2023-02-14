/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './index.html'
  ],
  theme: {
    fontFamily: {
      'anton': ['anton', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
