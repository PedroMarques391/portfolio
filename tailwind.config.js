/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        tablet: { min: '768px', max: '1100px' },
      },
      fontFamily: {
        arial: 'Arial',
      },
    },
  },
  plugins: [],
}