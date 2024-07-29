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
    screens: screens.getOverrides(),
  }
}

const getExtensions = () => {
  return {
    content: content.getExtensions(),
    colors: colors.getExtensions(),
    fontFamily: fontFamily.getExtensions(),
    fontSize: fontSize.getExtensions(),
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