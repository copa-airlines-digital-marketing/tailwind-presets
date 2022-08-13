const BASE_COLUMNS = {
  auto: 'auto'
}

const generateUnitColumns = (unit, start, end, step) => {
  const result = {}
  for (let i = start; i <= end; i = i + step) {
    result[i.toString()] = i.toString() + unit
  }
  return result
}

const getOverrides = () => {
  return {
    ...BASE_COLUMNS,
    ...generateUnitColumns('', 1, 4, 1)
  }
}

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}