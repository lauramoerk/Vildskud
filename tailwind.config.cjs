/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors:{
      'bgcolor':"#FEF6EC",
      'navcolor':"#F7E6CF",
      'primarycolor':"#EB9210",
      'accentcolor':"#C93139",
      'white':"#FFFFFF",
      'black':"#000",
    },
    fontFamily:{
      custard: "'custard',sans-serif",
      urbanist: "'Urbanist', sans-serif",},
    extend: {

    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")], 

};
