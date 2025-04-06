/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontSize: {
        'h1-desktop': '3.5rem', // 36px
        'h2-desktop': '2.5rem',  // 24px
        'h3-desktop': '2.16rem', // 20px
        'h4-desktop': '1.8rem',    // 16px
        'h5-desktop': '1.2rem', // 14px
        'h6-desktop': '0.8rem', // 12px
        'p-desktop': '1.2rem',     // 16px
        'ul-desktop': '1.2rem',    // 16px
        'ol-desktop': '1.2rem',    // 16px
        'li-desktop': '1.2rem',    // 16px
        'h1-mobile': '2.5rem', // 40px
        'h2-mobile': '2rem',  // 32px
        'h3-mobile': '1.75rem', // 28px
        'h4-mobile': '1.3rem',    // 24px
        'h5-mobile': '1.20rem',// 20px
        'h6-mobile': '1rem', // 16px
        'p-mobile': '1rem',     // 16px
        'ul-mobile': '1rem',    // 16px
        'ol-mobile': '1rem',    // 16px
        'li-mobile': '1rem',    // 16px
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
