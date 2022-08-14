const colors = require('./lib/colors')
const columns = require('./lib/columns')
const content = require('./lib/content')
const fontFamily = require('./lib/fontFamily')
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
    boxShadow: shadows.getOverrides(),
    colors: colors.getOverrides(),
    columns: columns.getOverrides(),
    dropShadow: shadows.getOverrides(),
    fontFamily: fontFamily.getOverrides(),
    fontSize: ,
    fontWeight: fontWeight.getOverrides(),
    gridColumn: gridColumn.getOverrides(),
    gridColumnEnd: gridColumnEnd.getOverrides(),
    gridColumnStart: gridColumnStart.getOverrides(),
    gridTemplateColumns: gridTemplateColumns.getOverrides(),
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
    ...getExtensions()
  }
}