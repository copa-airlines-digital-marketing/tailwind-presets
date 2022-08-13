const BASE_SHADOWS = {
  tiny: '0px 1px 2px rgba(0, 0, 0, 0.19)',
  medium: '0px 3px 5px rgba(0, 0, 0, 0.17)',
  large: [
    '0px 12px 17px rgba(0, 0, 0, 0.06)',
    '0px 5px 22px rgba(0, 0, 0, 0.06)',
    '0px 7px 8px rgba(0, 0, 0, 0.1)'
  ],
  modal: '0px 10px 20px 12px rgba(0, 0, 0, 0.12)'
}

const getOverrides = () => {
  return BASE_SHADOWS
}

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}