/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors :{
        violet: {
          100: '#7F3DFF', // Replace with your actual color value
          20 : '#EEE5FF'
        },
        light :{
          100 : "#FFFFFF",
          80 : "#FCFCFC",
          60 : "#F1F1FA",
          20: '#91919F',
        },
        dark :{
          75 : "#161719",
          50 : '#212325',
          25 : "292B2D"
        },
        red :{
          100 : "#FD3C4A"
        }
      }
    },
  },
  plugins: [],
}

