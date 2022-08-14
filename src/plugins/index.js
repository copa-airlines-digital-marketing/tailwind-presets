const base = require('./lib/base/index')
const utilities = require('./lib/utilities/index')
const components = require('./lib/components/index')

const getPlugins = () => [base(), ...utilities(), ...components()]

module.exports = getPlugins