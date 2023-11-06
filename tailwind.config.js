/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: '\'Space Grotesk\', sans-serif',
      },
      colors: {
        primary: '#0059b3',
        secondary: '#34A853',
        button: '#FFA500',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}

