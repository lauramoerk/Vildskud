/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        bgcolor:"#FEF6EC",
        navcolor:"#F7E6CF",
        primary:"#EB9210",
        accent:"#C93139",
      },
      fontFamily:{
        custard: "'custard',sans-serif",
        urbanist: "'Urbanist', sans-serif",}
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")], 

};
