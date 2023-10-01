/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#e002a2',
        'second': '#47019d',
        'sp_blue':'#3366ff',
        'three': '#e00256',
        'black': '#212121',
        'white': '#ffffff',
        'gray': '#808080e2'
      }
    },
  },
  plugins: [],
}

