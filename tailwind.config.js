/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
// const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./app/templates/**/*.html"],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        'dpl-blue': '#050d1a',
        'dpl-maroon': '#8C0D2F',
        'dpl-red': '#BF1523'
      },
      fontFamily: {
        teko: ["Teko Bold"],
      },
    },
  },
  plugins: [plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),],
}

