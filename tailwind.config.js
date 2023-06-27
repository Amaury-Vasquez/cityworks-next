/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        cityworks: {
          dark: '#212125',
          white: '#e2ffff',
          primary: '#f7f39a',
          secondary: '#b8b578',
          darker: '#080400',
          gray: '#414141',
          'theme-gray': '#18181c',
          info: '#414141',
          accent: '#848484',
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        dark: '#212125',
        white: '#e2ffff',
        primary: '#f7f39a',
        secondary: '#b8b578',
        darker: '#080400',
        gray: '#414141',
        'theme-gray': '#18181c',
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', filter: 'blur(5px)' },
        '100%': { opacity: '1', filter: 'blur(0px)' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.3s ease-in-out',
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
