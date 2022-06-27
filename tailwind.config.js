/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/images/bg-home.jpg')"
      }
    }
  },
  plugins: []
}
