/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        tablet: { min: '768px', max: '1100px' },
      },
      fontFamily: {
        arial: 'Arial',
      },
      keyframes: {
        animateCursor: {
          '0%': {
            color: 'rgb(65 105 225)',
          },
          '100%': {
            color: 'rgb(255 255 255)',
          },
        },
        animateCursorDark: {
          '0%': {
            color: 'rgb(255, 165, 0)',
          },
          '100%': {
            color: 'rgb(0 0 0)',
          },
        },
        snake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%, 75%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        animateCursor: 'animateCursor 1s infinite',
        animateCursorDark: 'animateCursorDark 1s infinite',
        animateSnake: 'snake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
