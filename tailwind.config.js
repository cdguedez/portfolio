/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,js}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fill: 'repeat(auto-fill, 360px)'
      }
    }
  },
  plugins: []
}
