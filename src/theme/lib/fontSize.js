const createFontSizeObject = (...args) => {
  return [args[0], {
    letterSpacing: args[2],
    lineHeight: args[1]
  }]
}


const BASE_FONT_FAMILY = {
  'u6': createFontSizeObject('--font-size-u6', '--letter-spacing-u6', '--line-height-u6'),
  'u5': createFontSizeObject('--font-size-u5', '--letter-spacing-u5', '--line-height-u5'),
  'u4': createFontSizeObject('--font-size-u4', '--letter-spacing-u4', '--line-height-u4'),
  'u3': createFontSizeObject('--font-size-u3', '--letter-spacing-u3', '--line-height-u3'),
  'u2': createFontSizeObject('--font-size-u2', '--letter-spacing-u2', '--line-height-u2'),
  'u1': createFontSizeObject('--font-size-u1', '--letter-spacing-u1', '--line-height-u1'),
  'b': createFontSizeObject('--font-size-b', '--letter-spacing-b', '--line-height-b'),
  'd1': createFontSizeObject('--font-size-d1', '--letter-spacing-d1', '--line-height-d1'),
  'd2': createFontSizeObject('--font-size-d2', '--letter-spacing-d2', '--line-height-d2'),
  'd3': createFontSizeObject('--font-size-d3', '--letter-spacing-d3', '--line-height-d3')
}

const getOverrides = () => {}

const getExtensions = () => BASE_FONT_FAMILY

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}