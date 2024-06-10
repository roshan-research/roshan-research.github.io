import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        yekanbakh: ["YekanBakh"],
      },
      screens: {
        bp1720: { max: "1720px" },
        bp1600: { max: "1600px" },
        bp1440: { max: "1440px" },
        bp1366: { max: "1366px" },
        bp1280: { max: "1280px" },
        bp1024: { max: "1024px" },
        bp960: { max: "960px" },
        bp800: { max: "800px" },
        bp768: { max: "768px" },
        bp700: { max: "700px" },
        bp480: { max: "480px" },
        bp425: { max: "425px" },
        bp360: { max: "360px" },
      },
    },
  },
  plugins: [],
};
export default config;
