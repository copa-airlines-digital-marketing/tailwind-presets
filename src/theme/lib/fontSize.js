const remValue = (size) => `${size/16}rem`

const createFontSizeObject = (...args) => {
  return [remValue(args[0]), {
    letterSpacing: remValue(args[2]),
    lineHeight: remValue(args[1])
  }]
}

const createFontSizeWithRems = (...args) => {
  return [args[0], {
    letterSpacing: args[2],
    lineHeight: args[1]
  }]
}

const BASE_FONT_FAMILY = {
  '12/16': createFontSizeObject(12, 16, 0),
  '14/20': createFontSizeObject(14, 20, 0),
  '16/24': createFontSizeObject(16, 24, 0),
  '18/24': createFontSizeObject(18, 24, 0),
  '20/24': createFontSizeObject(20, 24, 0),
  '20/32': createFontSizeObject(20, 32, 0),
  '24/32': createFontSizeObject(24, 32, 0),
  '28/32': createFontSizeObject(28, 32, 0),
  '30/32': createFontSizeObject(30, 32, 0),
  '30/40': createFontSizeObject(30, 40, 0),
  '32/40': createFontSizeObject(32, 40, 0),
  '36/40': createFontSizeObject(36, 40, 0),
  '40/48': createFontSizeObject(40, 48, 0),
  '44/48': createFontSizeObject(44, 48, 0),
  '48/64': createFontSizeObject(48, 64, 0),
  '52/56': createFontSizeObject(52, 56, 0),
  '56/64': createFontSizeObject(56, 64, 0),
  '60/64': createFontSizeObject(60, 64, 0),
  '66/72': createFontSizeObject(66, 72, 0),
  '76/80': createFontSizeObject(76, 80, 0),
  'h1': createFontSizeWithRems('1.88rem', '2rem', '-0.03rem'),
  'h1-sm': createFontSizeWithRems('2.75rem', '3rem', '-0.04rem'),
  'h1-md': createFontSizeWithRems('3.25rem', '3.50rem', '-0.05rem'),
  'h1-lg': createFontSizeWithRems('3.75rem', '4rem', '-0.06rem'),
  'h2': createFontSizeWithRems('1.25rem', '1.5rem', '-0.01rem'),
  'h2-sm': createFontSizeWithRems('1.50rem', '2rem', '-0.018rem'),
  'h2-md': createFontSizeWithRems('1.75rem', '2rem', '-0.025rem'),
  'h2-lg': createFontSizeWithRems('2rem', '2.50rem', '-0.03rem'),
  'h3': createFontSizeWithRems('1.13rem', '1.50rem', '0rem'),
  'h3-lg': createFontSizeWithRems('1.25rem', '2rem', '0rem'),
  'h4': createFontSizeWithRems('1rem', '1.50rem', '0rem'),
  'display-big': createFontSizeWithRems('2.50rem', '3rem', '-0.033rem'),
  'display-big-sm': createFontSizeWithRems('3.50rem', '4rem', '-0.045rem'),
  'display-big-md': createFontSizeWithRems('4.13rem', '4.50rem', '-0.054rem'),
  'display-big-lg': createFontSizeWithRems('4.75rem', '5rem', '-0.06rem'),
  'display-normal': createFontSizeWithRems('1.88rem', '2rem', '-0.033rem'),
  'display-normal-sm': createFontSizeWithRems('2.25rem', '2.50rem', '-0.045rem'),
  'display-normal-md': createFontSizeWithRems('2.50rem', '3rem', '-0.054rem'),
  'display-normal-lg': createFontSizeWithRems('3rem', '3.50rem', '-0.06rem'),
  'display-small': createFontSizeWithRems('1.25rem', '1.5rem', '-0.04rem'),
  'display-small-sm': createFontSizeWithRems('1.50rem', '2rem', '-0.045rem'),
  'display-small-md': createFontSizeWithRems('1.75rem', '2rem', '-0.054rem'),
  'display-small-lg': createFontSizeWithRems('2rem', '2.50rem', '-0.06rem'),
  'display-tiny': createFontSizeWithRems('1.13rem', '1.5rem', '0rem'),
  'display-tiny-lg': createFontSizeWithRems('1.25rem', '1.50rem', '0rem'),
  caption: createFontSizeWithRems('0.75rem', '1rem', '0rem'),
  'caption-large': createFontSizeWithRems('1.25rem', '2rem', '0rem'),
  'body-1': createFontSizeWithRems('1rem', '1.50rem', '0rem'),
  'body-2': createFontSizeWithRems('0.875rem', '1.25rem', '0rem'),
  overline: createFontSizeWithRems('0.75rem', '1rem', '0.0625'),
  'overline-sm': createFontSizeObject(12, 16, 0),
}

const getOverrides = () => {
  return BASE_FONT_FAMILY
}

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}