// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#16171A',
      white: '#FFFFFF',
      navy: '#0F015E',
      primary: '#7B16FF',
      secondary: '#24292E',
      purple: {
        100: '#F8F6FD',
        200: '#E8E5FF',
        300: '#DDD9FF',
        400: '#5856D6',
        500: '#4400CC',
        600: '#2A0080',
      },
      red: {
        default: '#FF3B30',
        100: '#ea4335',
        200: '#E22F2F',
        500: '#85000C',
      },
      gray: {
        default: '#67717A',
        100: '#FAFAFA',
        200: '#F6F7F8',
        300: '#EBECED',
        400: '#DFE7EF',
        500: '#7C8894',
        600: '#828C99',
        700: '#384047',
        800: '#16171A',
      },
    },
    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),
    borderColor: theme => theme('colors'),
  },
  variants: {},
  plugins: [require('tailwindcss-transitions')],
};
