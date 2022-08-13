const BASE_FONT_WEIGHT = {
  heading: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  body: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
  }

}

const getOverrides = () => BASE_FONT_WEIGHT

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}