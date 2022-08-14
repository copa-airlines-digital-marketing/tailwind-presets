const BASE_GRID_COLUMN = {
  'auto': 'auto;',
  'full': '1 / -1;',
  '1': 'span 1 / span 1;',
  '2': 'span 2 / span 2;',
  '3': 'span 3 / span 3;',
  '4': 'span 4 / span 4;'
}

const getOverrides = () => BASE_GRID_COLUMN

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}