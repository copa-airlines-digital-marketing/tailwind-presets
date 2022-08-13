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
    const number = i.toString().split('.')[0]
    const fraction = '0.' + (i.toString().split('.')[1] || '0')
    const len = fraction.length - 2;

    let denominator = Math.pow(10, len);
    let numerator = parseFloat(fraction) * denominator;

    const divisor = gcd(numerator, denominator);

    numerator /= divisor;
    denominator /= divisor;

    const sufix = denominator != 1 ? `${number !== '0' ? number+'_': ''}${numerator}/${denominator}` : `${number}`

    result[sufix] = `${i}${unit}`
  }
  return result
}

const getOverrides = () => {
  return {
    ...BASE_SPACING,
    ...generateUnitSpacing('rem', 0, 9.5, 0.5)
  }
}

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}