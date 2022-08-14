const BASE_FONT_WEIGHT = {
  'heading-normal': 400,
  'heading-medium': 500,
  'heading-bold': 700,
  'body-light': 300,
  'body-normal': 400,
  'body-medium': 500,
  'body-semibold': 600,
}

const getOverrides = () => BASE_FONT_WEIGHT

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}