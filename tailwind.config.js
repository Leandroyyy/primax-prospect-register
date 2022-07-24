/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors:{
      'primaxBlue':'#2196f3',
      'white':'#fff',
      'gray':'#424343'
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
