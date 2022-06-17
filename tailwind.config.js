module.exports = {
  purge: ["./dist/*.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        main: {
          100: "#282354",
          200: "#4A3F9C",
          300: "#705bf0",
          400: "#708cff",
        },
        pinky: {
          100: "#ff7173",
          200: "#ff5657",
        },
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
