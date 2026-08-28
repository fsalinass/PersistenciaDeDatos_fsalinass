/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.tsx",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: '#49129C',
        secondary:{
          default:'#B40086',
          100:'#C51297',
          200:'#831266',
        }
      },

      fontFamily:{
        'work-black': [ 'WorkSans-Black', 'sans-serif' ],
        'work-light': [ 'WorkSans-Light', 'sans-serif' ],
        'work-medium': [ 'WorkSans-Medium', 'sans-serif' ],
      }
    },
  },
  plugins: [],
}