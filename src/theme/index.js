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
const background = require('./lib/backgrounds')

const getOverrides = () => {
  return {
    boxShadow: shadows.getOverrides(),
    colors: colors.getOverrides(),
    columns: columns.getOverrides(),
    dropShadow: shadows.getOverrides(),
    fontFamily: fontFamily.getOverrides(),
    fontSize: fontSize.getOverrides(),
    fontWeight: fontWeight.getOverrides(),
    gridColumn: gridColumn.getOverrides(),
    gridColumnEnd: gridColumnEnd.getOverrides(),
    gridColumnStart: gridColumnStart.getOverrides(),
    gridTemplateColumns: gridTemplateColumns.getOverrides(),
    screens: screens.getOverrides(),
    spacing: spacing.getOverrides(),
    background: background.getOverrides(),
  }
}

const getExtensions = () => {
  return {
    content: content.getExtensions(),
    opacity: opacity.getExtensions(),
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