/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        SF: ['SFProDisplay-Regular'],
        abel: ['Abel-Regular'],
      },
      lineHeight: {
        title: '30.59px',
        priceDesc: '14.32px',
        priceHomeScreen: '17.84px',
        descText: '16.71px',
        big: '20.39px',
        normal: '15.75px',
        small: '14.06px',
      },
      fontSize: {
        title: '24px',
        normal: '16px',
        secondary: '14px',
        small: '12px',
      },
      borderRadius: {
        default: '20px',
      },
      colors: {
        greyBgColor: '#F7F7F7',
        borderColor: '#F5F5F5',
      },
      textColor: {
        greyTextColor: '#979797',
        descTextColor: '#9D9D9D',
      },
    },
  },
  plugins: [],
}
