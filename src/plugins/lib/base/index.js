const plugin = require('tailwindcss/plugin')
const rootVars = require('./rootVars')

const getStyles = () => plugin(function ({
  addBase,
}) {
  addBase({
    ':root': rootVars()
  })
})

module.exports = getStyles