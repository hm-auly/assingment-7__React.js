/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0FF1F6",
        secondary: "#adb2b1",
        foreground: "#ffffff",
      },
      fontFamily: { mplus1: '"M PLUS 1", sans-serif' },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
  plugins: [],
}

