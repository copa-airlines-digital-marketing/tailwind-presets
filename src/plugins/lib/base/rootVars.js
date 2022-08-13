const colorsVars = require('./colorVars')

const getVars = () => {
  return {
    ...colorsVars()
  }
}

module.exports = getVars