/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors :{
        violet: {
          100: '#7F3DFF', // Replace with your actual color value
        },
        light :{
          
        }
      }
    },
  },
  plugins: [],
}

