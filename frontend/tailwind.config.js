/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "chatlab-dark-blue": "#14162E",
        "chatlab-blue": "#2E88EF",
        "chatlab-pink": "#FF60AC",
        "chatlab-red": "#FF6060",
        "chatlab-yellow": "#FFDC60",
        "chatlab-purple": "#A660FF",
        "chatlab-light-blue": "#60B2FF",
        "chatlab-light-green": "#60FF9F",
      },
    },
  },
  plugins: [],
};
