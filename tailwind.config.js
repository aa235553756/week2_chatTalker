/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
          // '2xl': { max: '1535px' },
          // xl: { max: '1279px' },
          // lg: { max: '1023px' },
          // md: { max: '767px' },
          // sm: { max: '639px' },
  
        minsm: { min: '640px' },
        minmd: { min: '768px' },
        minlg: { min: '1024px' },
        minxl: { min: '1280px' },
        min2xl: { min: '1536px' },
      },
      fontFamily:{
        'sans': ['Noto Sans TC', 'sans-serif']
      },
      backgroundImage: {
      },
      // screens:{
      //   // 1088+20x2 px
      //   // 1128
      //   'xl':{min:'1128px'},
      //   // 768+20x2
      //   // 992時更動
      //   'lg':{min:'808px'},
      //   // 696+20x2
      //   // 768時更動
      //   'md':{min:'736px'},
      // },
      // screens: {
      //   sm: '480px',
      //   md: '768px',
      //   lg: '976px',
      //   xl: '1440px',
      // },
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
