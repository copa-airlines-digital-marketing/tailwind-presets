const plugin = require('tailwindcss/plugin')

const getUtility = () => plugin(function ({
  matchUtilities,
  theme
}) {
  matchUtilities({
    background: (value) => ({
      color: value,
    }),
  }, {
    values: theme('colors')
  })
})

module.exports = getUtility