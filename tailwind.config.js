/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#135D66",
        backdrop: "#E3FEF7",
        dark: '#003C43',
        // dark: '#134264',
        secondary:"#77B0AA",
        
        yell: "#f9b940"
      }
    },
  },
  plugins: [],
}