const OPACITY_EXTENSION = {
  faded: {
    primary: '0.4',
    secondary: '0.5',
    status: '0.15'
  }
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