/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        tundora: {
          50: "#CDD0D5",
          100: "#C2C5CC",
          200: "#ACB0BA",
          300: "#969BA7",
          400: "#7F8694",
          500: "#6B7280",
          600: "#515761",
          700: "#383C43",
          800: "#1E2024",
          900: "#050506",
        },
      },
    },
  },
  plugins: [],
};
