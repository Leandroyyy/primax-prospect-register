/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors:{
      'primaxBlue':'#2196f3',
      'white':'#fff',
      'gray':'#3a3a3a'
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
