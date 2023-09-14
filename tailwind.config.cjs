/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      variantConfiguration: ["responsive"],
      fontFamily: {
        iranyekan: ["IranYekan"],
        iranyekannum: ["IranYekanNum"],
      },
      screens: {
        sm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
