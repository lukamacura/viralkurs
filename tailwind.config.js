/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        muted: "var(--muted)",
        primary: "var(--primary)",
        "primary-fg": "var(--primary-fg)",
      },
      fontFamily: {
        sans: ["var(--font-supreme)", "system-ui", "sans-serif"],
        stencil: ["var(--font-bespoke)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    // zamena za @custom-variant hocus:
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
