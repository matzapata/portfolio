/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#ecf2f8",
          200: "#c6cdd5",
          300: "#89929b",
          400: "#21262d",
          500: "#161b22",
          600: "#0d1117"
        }
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}