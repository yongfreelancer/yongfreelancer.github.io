/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ['"Space Mono"', "monospace"],
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
