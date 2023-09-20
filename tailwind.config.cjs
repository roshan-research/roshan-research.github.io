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
        '2xl': {max: "1536px"},
        'md': {max: '768px'},
        'lg': {max: '1024px'},
        custombp: {raw: '(max-width: 1000px)'},
        custombp2: {raw: '(max-width: 860px)'},
        custombp3: {raw: '(max-width: 1570px)'},
        custombp4: {raw: '(max-width: 820px)'},
        custombp5: {raw: '(max-width: 550px)'},
      },
    },
  },
  plugins: [],
};
