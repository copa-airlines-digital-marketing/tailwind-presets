const base = require('./lib/base/index')
const utilities = require('./lib/utilities/index')

const getPlugins = () => [base(), ...utilities()]

module.exports = getPlugins