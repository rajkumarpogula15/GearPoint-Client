/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        tertiar2:"#5A4F8E",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        navyblue: '#05445e',
        bluegrotto: '#189ab4',
        bluegreen: '#75e6da',
        babyblue: '#d4f1f4',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
