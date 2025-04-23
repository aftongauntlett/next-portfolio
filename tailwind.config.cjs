// tailwind.config.cjs
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/hooks/**/*.{js,jsx,ts,tsx}",
    "./src/constants/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        "body-light": "var(--color-body-light)",
        "body-dark": "var(--color-body-dark)",
        "text-light": "var(--color-text-light)",
        "text-dark": "var(--color-text-dark)",
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        "secondary-light": "var(--color-secondary-light)",
        "secondary-dark": "var(--color-secondary-dark)",
      },
      fontSize: {
        fluid: "clamp(1.25rem, 2.5vw, 2rem)",
      },
      spacing: {
        "fluid-x": "clamp(1rem, 5vw, 4rem)",
        "fluid-y": "clamp(4rem, 8vw, 6rem)",
      },
    },
  },
  plugins: [],
};
