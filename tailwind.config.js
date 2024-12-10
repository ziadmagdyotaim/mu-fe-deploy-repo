/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
      },
      container: {
        center: true,
      },
      colors: {
        primary: "#176D6A",
        secondary: "#6D171A",
        success: "#28A745",
        warning: "#FFC107",
        pending: "#F29339",
        danger: "#DC3545",
      },
    },
  },
  plugins: [],
};
