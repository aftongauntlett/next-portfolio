import { type Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        heading: "var(--font-heading)",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
      },
    },
  },
  plugins: [],
};

export default config;
