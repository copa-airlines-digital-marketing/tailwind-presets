const BASE_GRID_TEMPLATE_COLUMNS = {
  '1': 'repeat(1, minmax(0, 1fr))',
  '2': 'repeat(2, minmax(0, 1fr))',
  '3': 'repeat(3, minmax(0, 1fr))',
  '4': 'repeat(4, minmax(0, 1fr))'
}

const getOverrides = () => BASE_GRID_TEMPLATE_COLUMNS

const getExtensions = () => {
  return {
    'container': '16px 1fr 16px',
    'container-sm': '1fr 560px 1fr',
    'container-md': '72px 1fr 72px',
    'container-lg': '1fr 1224px 1fr',
  }
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}