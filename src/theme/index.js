const colors = require('./lib/colors')
const columns = require('./lib/columns')
const content = require('./lib/content')
const fontFamily = require('./lib/fontFamily')
const fontSize = require('./lib/fontSize')
const fontWeight = require('./lib/fontWeight')
const gridColumn = require('./lib/gridColumn')
const gridColumnEnd = require('./lib/gridColumnEnd')
const gridColumnStart = require('./lib/gridColumnStart')
const gridTemplateColumns = require('./lib/gridTemplateColumns')
const opacity = require('./lib/opacity')
const screens = require('./lib/screens')
const shadows = require('./lib/shadows')
const spacing = require('./lib/spacing')

const getOverrides = () => {
  return {
  }
}

const getExtensions = () => {
  return {
    content: content.getExtensions(),
    opacity: opacity.getExtensions(),
    boxShadow: shadows.getExtensions(),
    colors: colors.getExtensions(),
    columns: columns.getExtensions(),
    dropShadow: shadows.getExtensions(),
    fontFamily: fontFamily.getExtensions(),
    fontSize: fontSize.getExtensions(),
    fontWeight: fontWeight.getExtensions(),
    gridColumn: gridColumn.getExtensions(),
    gridColumnEnd: gridColumnEnd.getExtensions(),
    gridColumnStart: gridColumnStart.getExtensions(),
    gridTemplateColumns: gridTemplateColumns.getExtensions(),
    screens: screens.getExtensions(),
    spacing: spacing.getExtensions(),
  }
}

const getTheme = () => {
  return {
    ...getOverrides(),
    extend: {
      ...getExtensions()
    }
  }
}

module.exports = getTheme