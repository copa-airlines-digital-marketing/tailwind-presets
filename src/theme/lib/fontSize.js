const remValue = (size) => `${size/16}rem`

{
  '76-80': [remValue(76), {
    lineHeight: remValue(80)
  }],
  '66-72': [remValue(66), {
    lineHeight: remValue(72)
  }],

  '60-64': [remValue(60), {
    lineHeight: remValue(64)
  }],
  '56-64': [remValue(56), {
    lineHeight: remValue(64)
  }],
  '52-56': [remValue(52), {
    lineHeight: remValue(56)
  }],
  '48-64': [remValue(48), {
    lineHeight: remValue(64)
  }],
  '44-48': [remValue(44), {
    lineHeight: remValue(48)
  }],
  '40-48': [remValue(40), {
    lineHeight: remValue(48)
  }],
  '36-40': [remValue(36), {
    lineHeight: remValue(40)
  }],
  '32-40': [remValue(32), {
    lineHeight: remValue(40)
  }],
  '30-40': [remValue(30), {
    lineHeight: remValue(40)
  }],
  '30-32': [remValue(28), {
    lineHeight: remValue(28)
  }],
  '28-32': [remValue(28), {
    lineHeight: remValue(28)
  }],
  '24-32': [remValue(24), {
    lineHeight: remValue(28)
  }],
  '20-32': [remValue(20), {
    lineHeight: remValue(28)
  }],
  '20-24': [remValue(20), {
    lineHeight: remValue(24)
  }],
  '18-24': [remValue(18), {
    lineHeight: remValue(24)
  }],
  '16-24': [remValue(16), {
    lineHeight: remValue(24)
  }],
  '14-20': [remValue(14), {
    lineHeight: remValue(20)
  }],
  '12-16': [remValue(12), {
    lineHeight: remValue(16)
  }]
}

const BASE_FONT_FAMILY = {
  heading: ['Gilroy', 'Helvetica', 'Arial', 'sans-serif'],
  body: ['SuisseIntl', 'Helvetica', 'Arial', 'sans-serif']
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