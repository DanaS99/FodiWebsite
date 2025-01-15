/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#39DB4A",
        "black": "#272727",
        "red": "#FF6868",
        "secondary-black": "#555555",
        "bg": "#FCFCFC",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "inter": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
