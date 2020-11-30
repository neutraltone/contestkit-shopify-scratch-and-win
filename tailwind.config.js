// const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      transitionDelay: {
        "2000": "2000ms",
        "2100": "2100ms",
      },
      transitionProperty: {
        "drawer-toggle": "background-color, border-radius, transform",
        "height-opacity": "height, opacity",
        "opacity-transform": "opacity, transform",
        "width-shadow": "width, box-shadow",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
};
