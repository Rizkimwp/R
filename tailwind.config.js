/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#050C9C',
      navbar: '#A7E6FF',
      secondary: '#3572EF',
      white: '#F6F5F2',
      abu: '#EEEEEE',
      dark: '#26355D',
      success: '#00ff9c',
    },
    fontFamily: {
      fightree: ['Figtree', 'sans-serif'],
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    extend: {},
  },
  plugins: [],
}
