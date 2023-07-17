/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linkblue: "rgb(66,140,209)",
        linearfrom: "rgb(30,112,189) 10%",
        linearto: "rgb(124,212,235) 100%",
      },
      dropShadow: {
        linkHover: "0 4px 10px rgba(0,0,0, 0.25)",
      },
    },
  },
  plugins: [],
};
