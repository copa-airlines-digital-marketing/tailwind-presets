const BASE_GRID_COLUMN_START = {
  'auto': 'auto;',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4'
}

const getOverrides = () => BASE_GRID_COLUMN_START

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}