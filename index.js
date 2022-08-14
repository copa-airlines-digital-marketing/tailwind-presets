const plugins = require('./src/plugins/index')
const theme = require('./src/theme/index')
const constants = require('./src/constants')

const cleanObject = (plugins, theme) => {
  const result = {}
  if (plugins.length > 0) result.plugins = plugins
  if (Object.keys(theme).length > 0) result.theme = theme
  return result
}

module.exports = {
  corePlugins: {
    container: false
  },
  ...cleanObject(plugins(), theme())
}