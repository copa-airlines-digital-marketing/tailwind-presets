const plugin = require('tailwindcss/plugin')

const getUtility = () => plugin(function ({
  matchUtilities,
  theme
}) {
  matchUtilities({
    square: (value) => ({
      height: value,
      width: value
    }),
  }, {
    values: theme('spacing')
  })
})

module.export = getUtility