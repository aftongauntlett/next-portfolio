import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        // heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#22D3EE",
      },
    },
  },
  plugins: [],
};

export default config;
