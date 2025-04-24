// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* body-background still namespaced */
        "body-light": "var(--color-body-light)",
        "body-dark": "var(--color-body-dark)",

        /* text colors now top-level */
        light: "var(--color-text-light)",
        dark: "var(--color-text-dark)",

        /* your primary/secondary palettes */
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        "secondary-light": "var(--color-secondary-light)",
        "secondary-dark": "var(--color-secondary-dark)",
      },
      /* …other extends (fontSize, spacing)… */
    },
  },
  plugins: [],
};
