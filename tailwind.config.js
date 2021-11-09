module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'xsm': '320px',
      },
      colors:{
        primary: '#ff9900',
        secondary: '#146eb4',
        background: '#181818',
        card:'#363636',
        surface: '#f2f2f2',
        headline:'#d3d3d3',
        bodytext: '#ffffff',
        subtitle:'#A3A3A3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
