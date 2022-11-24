/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark" : "#000000",
        "newDark" : "#202020",
        "modo" : "#323232",
        "mora" : "#5E17EB",
        "moradito" : "#05001B"
      }
    },
  },
  plugins: [],
}
