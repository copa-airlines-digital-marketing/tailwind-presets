const CONTENT_EXTENSION = {
  blank: ''
}

const getOverrides = () => {
  return {}
}

const getExtensions = () => {
  return {
    ...CONTENT_EXTENSION
  }
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}