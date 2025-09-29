import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "rgba(17,39,60,1)", // your main navy
          light: "rgba(17,39,60,0.85)",
          dark: "rgba(17,39,60,1)",
          accent: "#B19D70" // keep gold accent if you want contrast
        }
      }
    },
  },
  plugins: [],
};
export default config;
