const base = require('./lib/base/index')
const utilities = require('./lib/utilities/index')

export const getPlugins = () => [base(), ...utilities()]