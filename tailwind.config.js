/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'moon': 'moonGrow 0.2s linear 0.2s',
        'sun': 'sunGrow 0.2s linear 0.2s',
      },
      keyframes: {
        moonGrow: {
          '0%': { backgroundSize: '24px 24px' },
          '50%': { backgroundSize: '20px 20px' },
          '100%': { backgroundSize: '24px 24px' },
        },
        sunGrow: {
          '0%': { backgroundSize: '24px 24px' },
          '50%': { backgroundSize: '20px 20px' },
          '100%': { backgroundSize: '24px 24px' },
        }
      },
      backgroundSize: {
        '20x20': '20px 20px'
      },
      width: {
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
        '45%': '45%',
        '340px': '340px'
      },
      fontFamily: {
        arial: 'Arial',
      },
    },
  },
  plugins: [],
}