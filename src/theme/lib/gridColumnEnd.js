const BASE_GRID_COLUMN_END = {
  'auto': 'auto;',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4'
}

const getOverrides = () => BASE_GRID_COLUMN_END

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}