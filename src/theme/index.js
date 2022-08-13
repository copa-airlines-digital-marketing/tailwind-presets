const colors = require('./lib/colors')
const columns = require('./lib/columns')
const content = require('./lib/content')
const fontFamily = require('./lib/fontFamily')
const opacity = require('./lib/opacity')
const screens = require('./lib/screens')
const shadows = require('./lib/shadows')
const spacing = require('./lib/spacing')

const getOverrides = () => {
  return {
    boxShadow: shadows.getOverrides(),
    colors: colors.getOverrides(),
    columns: columns.getOverrides(),
    dropShadow: shadows.getOverrides(),
    fontFamily: fontFamily.getOverrides(),
    fontSize: ,
    fontWeight: ,
    gridColumn: ,
    gridColumnStart: ,
    gridTemplateColumns: ,
    screens: screens.getOverrides(),
    spacing: spacing.getOverrides(),
  }
}

const getExtensions = () => {
  return {
    content: content.getExtensions(),
    opacity: opacity.getExtensions(),
  }
}

module.exports = {
  ...getOverrides(),
  extend: {
    ...getExtension()
  }
}