const BASE_SPACING = {
  auto: 'auto',
  'px': '1px',
}

const gcd = (a, b) => {
  if (b < 0.0000001) return a;

  return gcd(b, Math.floor(a % b));
};

const generateUnitSpacing = (unit, start, end, step) => {
  const result = {}
  for (let i = start; i <= end; i = i + step) {
    result[i.toString().replace('.', '_')] = `${i}${unit}`
  }
  return result
}

const getOverrides = () => {
  return {
    ...BASE_SPACING,
    ...generateUnitSpacing('px', 0, 152, 8)
  }
}

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}