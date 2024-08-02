/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navtext: "rgb(255,66,43)",
        hero1bg: "rgb(239,239,239)",
        appbg: "rgb(249,249,249)",
        textbg: "rgb(255,66,43)",
        buttonbg: "rgb(253,69,76)",
        textcarubg: "rgb(149,149,149)",
        borderbg: "rgb(203,203,203)",
      },
    },
  },
  plugins: [],
};
