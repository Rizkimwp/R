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
      navy: '#303551',
      black: '#1E2233',
      success: '#00ff9c',
      color1: '#FF6347', // Warna untuk tetromino tipe 1
      color2: '#4682B4', // Warna untuk tetromino tipe 2
      color3: '#32CD32', // Warna untuk tetromino tipe 3
      color4: '#FFD700', // Warna untuk tetromino tipe 4
      color5: '#8A2BE2', // Warna untuk tetromino tipe 5
      color6: '#FF4500', // Warna untuk tetromino tipe 6
      color7: '#1E90FF',
      transparent:'#FFFFFF00' // Warna untuk tetromino tipe 7
    },
    fontFamily: {
      fightree: ['Figtree', 'sans-serif'],
      fig: ['Fig', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],
      lora: ['Lora', 'serif'],
      montserrat: ['Montserrat', 'sans-serif'],
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
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/asset/nordwall2.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
