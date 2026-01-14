/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f6f8",
          100: "#e6e8ee",
          200: "#c9ceda",
          300: "#a8afc2",
          400: "#7b85a1",
          500: "#5c6685",
          600: "#46506c",
          700: "#343c54",
          800: "#242b3f",
          900: "#181e2c"
        },
        sky: {
          50: "#eef8ff",
          100: "#d6efff",
          200: "#b5e4ff",
          300: "#85d4ff",
          400: "#47bcff",
          500: "#1b9dff",
          600: "#0d7ad6",
          700: "#0f62ad",
          800: "#114f86",
          900: "#123c63"
        },
        moss: {
          100: "#e6f7ef",
          200: "#c4ecd9",
          300: "#92d9b9",
          400: "#5cc595",
          500: "#3daa78",
          600: "#2c875f",
          700: "#236b4c"
        },
        amber: {
          100: "#fff5dd",
          200: "#ffe6b3",
          300: "#ffd38a",
          400: "#ffb85a",
          500: "#ff9d2a",
          600: "#e07b10",
          700: "#b35c0b"
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 30px -18px rgba(24, 30, 44, 0.45)"
      }
    }
  },
  plugins: []
};
