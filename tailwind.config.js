/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Open Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      heading: ["Saira", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#ff2c9c",
        black: "#18181b",
        gray: "#646464",
      },
      backgroundImage:{
        gradient: "linear-gradient(to left top, #ff2c9c, #ff287b, #ff395a, #ff5137, #ff6a00)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
