/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "Great Vibes, cursive",
        body: "ClashDisplay",
      },
      colors: {
        light: "#Fdfffc",
        blue: "#1190ef",
        head: "#00BBFA"
      },
    },
  },
  plugins: [],
};
