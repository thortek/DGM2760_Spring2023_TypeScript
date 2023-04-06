/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["cupcake", "dark", "emerald", "forest", "synthwave", "halloween", "bumblebee", "valentine", "light",],
  },
  content: [
    "./src/**/*.{html,ts}",
    './index.html'
  ],
  theme: {
    fontFamily: {
      'babylonica': ['babylonica', 'cursive']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
