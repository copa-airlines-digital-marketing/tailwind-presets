const BASE_SCREENS = {
  xs: {
    max: '599px'
  },
  sm: '600px',
  'sm-only': {
    min: '600px',
    max: '959px'
  },
  md: '960px',
  'md-only': {
    min: '960px',
    max: '1366px'
  },
  'cm-laptop': {
    min: '1280px',
    max: '1367px'
  },
  lg: '1367px',
}

const getOverrides = () => {
  return BASE_SCREENS
}

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}