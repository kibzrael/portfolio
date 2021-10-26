module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#ff9900',
        secondary: '#146eb4',
        surface: '#f2f2f2',
        headline:'#565656',
        subtitle:'#A3A3A3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
