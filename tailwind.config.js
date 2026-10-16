/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          50: "#171717",
          100: "#121212",
          200: "#0A0A0A",
          300: "#242424",
          400: "#383838",
        },
        white: {
          DEFAULT: "#FFFFFF",
          muted: "#A3A3A3",
          subtle: "#737373",
        },
        neutral: {
          850: "#1c1c1c",
          950: "#080808",
        },
      },
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "robotics-glow": "0 0 25px rgba(255, 255, 255, 0.12)",
        "robotics-inset": "inset 0 0 15px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};