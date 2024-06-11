/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      variantConfiguration: ["responsive"],
      screens: {
        bp1920: { max: "1920px" },
        bp1280: { max: "1280px" },
        bp1024: { max: "1024px" },
        bp960: { max: "960px" },
        bp768: { max: "768px" },
        bp640: { max: "640px" },
        bp480: { max: "480px" },
      },
    },
  },
  plugins: [],
};
