/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        purple: '#2D2641;',
        darkPurple: '#2C2830',
        lightGray: '#837D88',
        offWhite: 'FAFAFA',
        lightPurple: '#C396C6'
      },
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
       backgroundImage: {
        'heroDesktop': "url('/images/image-intro-desktop.jpg')",
        'heroMobile': "url('images/image-intro-mobile.jpg')",
       },
    },
  },
  plugins: [],
}