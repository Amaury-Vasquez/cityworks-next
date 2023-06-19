/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './modules/**/*.{js,jsx,ts,tsx}',
    './layouts/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#212125',
        white: '#e2ffff',
        primary: '#f7f39a',
        secondary: '#b8b578',
        darker: '#080400',
        gray: '#414141',
      },
    },
  },
  plugins: [require('daisyui')],
};
