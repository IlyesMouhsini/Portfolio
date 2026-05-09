/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'neon': '#00FF00', /* Le vert vif exact de ton design */
        'neon-pink': '#FF00FF', /* Le rose/violet pour le / SP */
      },
      fontFamily: {
        // Tu pourras utiliser 'font-maratype'
        'maratype': ['Maratype', 'serif'],
        // Tu pourras utiliser 'font-screener'
        'screener': ['Screener', 'sans-serif'],
      },
    },
  },
  plugins: [],
};