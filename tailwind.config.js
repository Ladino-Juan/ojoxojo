/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        amarillo: "#FFED03CC",
        blanco: "#F5F5F7",
      },
    },
  },
  plugins: [],
};
