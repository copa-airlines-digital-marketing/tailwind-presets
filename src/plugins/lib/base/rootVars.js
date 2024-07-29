const getVars = () => {
  return {
    ...require('./colorVars')(),
    ...require('./verticalSpacingVars')(),
    ...require('./otherSpacingVars')(),
    ...require('./lineHeight')(),
    ...require('./fontSize')(),
    ...require('./letter-spacing')()
  }
}

module.exports = getVars