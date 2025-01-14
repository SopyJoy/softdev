/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,jss,ts}"],
  theme: {
      fontFamily:{
        Montserrat:"Montserrat,sans-serif",
      },
      container:{
        center:true,
        padding: "2rem",

      },
  },
  plugins: [],
}
