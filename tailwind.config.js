/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
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
