/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'green100' : '#25544E',
        'green80' : '#669A94',
        'green60' : '#83ACA7',
        'green40' : '#A3D9D4',
        'green20' : '#D4E6E4',
        'helloColor' : '#EDC8C8',
    
      }
    },
  },
  plugins: [],
}
