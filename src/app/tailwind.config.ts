import type { Config } from "tailwindcss";
import { join } from "path";

const config: Config = {
  content: [join(__dirname, "src/**/*.{js,ts,jsx,tsx}")],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        fluid: "clamp(1.25rem, 2.5vw, 2rem)",
      },
      spacing: {
        "fluid-x": "clamp(1rem, 5vw, 4rem)",
        "fluid-y": "clamp(4rem, 8vw, 6rem)",
      },
      colors: {
        "body-light": "var(--color-body-light)",
        "body-dark": "var(--color-body-dark)",
        "text-dark": "var(--color-text-dark)",
        "text-light": "var(--color-text-light)",
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
      },
    },
  },
  plugins: [],
};

export default config;
