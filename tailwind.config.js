/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid",
  ],
  theme: {
    extend: {
      fontFamily: {
        homemade_apple: ["Homemade Apple", "sans-serif"],
      },
    },
  },
  plugins: [],
};
