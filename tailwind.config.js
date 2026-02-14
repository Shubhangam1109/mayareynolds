/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d3c7',
          300: '#a3b5a3',
          400: '#7d947d',
          500: '#5f7a5f',
          600: '#4a614a',
          700: '#3d4f3d',
          800: '#334133',
          900: '#2b362b',
        },
        coral: {
          50: '#fef6f5',
          100: '#fdecea',
          200: '#fbdcd9',
          300: '#f7c0ba',
          400: '#f19b92',
          500: '#e6766a',
          600: '#d25648',
          700: '#b13f33',
          800: '#93382e',
          900: '#7a342c',
        },
      },
    },
  },
  plugins: [],
};
