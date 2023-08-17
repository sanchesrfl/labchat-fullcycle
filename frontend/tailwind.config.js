/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        chatlab: {
          "dark-blue": "#14162E",
          blue: "#2E88EF",
          pink: "#FF60AC",
          red: "#FF6060",
          yellow: "#FFDC60",
          purple: "#A660FF",
          "light-blue": "#60B2FF",
          "light-green": "#60FF9F",
          "dark-purple": "#5A3580",
        },
      },
    },
  },
  plugins: [],
};
