/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Noto Sans TC', 'sans-serif']
      },
      backgroundImage: {
        'home-sm': "url('/images/bg_home_sm.svg')",
      },
      screens:{
        // 1088+20x2 px
        'xl':'1128px',
      },
      container: {
        center: true,
        padding: "20px"
      },
      colors:{ 
        primary:'#56C4C5',
        secondary:'#FF5D50',
        lightYellow: '#FFD153'
      }
    },
  },
  plugins: [],
}
