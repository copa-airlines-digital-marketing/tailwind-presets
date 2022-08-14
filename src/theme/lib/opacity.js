const OPACITY_EXTENSION = {
  'primary-faded': '0.4',
  'secondary-faded': '0.5',
  'status-faded': '0.15'
}

const getOverrides = () => {
  return {}
}

const getExtensions = () => {
  return {
    ...OPACITY_EXTENSION
  }
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}