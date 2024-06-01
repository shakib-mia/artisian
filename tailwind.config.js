/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1640px",
      },
    },
    extend: {
      colors: {
        primary: "#0B2727",
        secondary: "#FF7E01",
        gray: { DEFAULT: "#EAEAEA", dark: "#b2b2b2" },
        white: "#FFFFFF",
      },
      fontSize: {
        "2xl": "64px",
        xl: "48px",
        lg: "40px",
        md: "30px",
        sm: "24px",
        xs: "20px",
        xxs: "18px",
        button: "26px",
        body: "16px",
        caption: "11px",
      },
      fontFamily: {
        sansation: ["Sansation", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        judson: ["Judson", "serif"],
      },
    },
  },
  plugins: [],
};
