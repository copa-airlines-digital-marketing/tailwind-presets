const colors = require('./lib/colors')

const getOverrides = () => {
  return {
    borderRadius: ,
    boxShadow: ,
    colors: colors.getOverrides(),
    columns: ,
    container: ,
    dropShadow: ,
    fontFamily: ,
    fontSize: ,
    fontWeight: ,
    gridColumn: ,
    gridColumnStart: ,
    gridTemplateColumns: ,
    letterSpacing: ,
    lineHeight: ,
    screens: ,
    spacing: ,
  }
}

const getExtensions = () => {
  return {
    content: ,
    opacity: ,
  }
}

module.exports = {
  getOverrides: getTheme,
  getExtensions: getExtension
}

const old = {
  theme: {
    boxShadow: {
      tn: '0px 1px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.08)',
      md: '0px 4px 5px rgba(0, 0, 0, 0.07), 0px 3px 15px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.12)',
      lg: '0px 12px 17px rgba(0, 0, 0, 0.06), 0px 5px 22px rgba(0, 0, 0, 0.06), 0px 7px 8px rgba(0, 0, 0, 0.1)',
      modal: '0px 24px 24px 12px rgba(0, 0, 0, 0.0987885)'
    },
    colors: colors,
    container: {
      center: true,
      padding: {
        DEFAULT: remValue(16),
        md: remValue(24)
      }
    },
    fontFamily: {
      sans: ['SuisseIntl', 'Helvetica', 'Arial', 'sans-serif'],
      heading: ['Gilroy', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['SuisseIntl', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
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
    },
    letterSpacing: {
      0: '0px',
      '053': '0.53px',
      '063': '0.63px',
      '075': '0.75px',
      '088': '0.88px',
      '094': '0.94px',
      1: remValue(1),
      1025: '1.25px',
      1033: '1.33px',
      1042: '1.42px',
      105: '1.5px',
      1083: '1.83px',
      2017: '2.17px',
      2021: '2.21px',
      205: '2.5px',
      2061: '2.61px',
      3: '3px',
      r001: '0.01rem',
      r0018: '0.018rem',
      r0025: '0.025rem',
      r003: '0.03rem',
      r0033: '0.033rem',
      r004: '0.04rem',
      r0045: '0.045rem',
      r005: '0.05rem',
      r0054: '0.054rem',
      r006: '0.06rem',
    },
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1367px'
    },
    spacing: {
      '2em': '2em',
      0: 0,
      1: remValue(1),
      2: remValue(2),
      4: remValue(4),
      8: remValue(8),
      12: remValue(12),
      16: remValue(16),
      24: remValue(24),
      32: remValue(32),
      40: remValue(40),
      48: remValue(48),
      56: remValue(56),
      64: remValue(64),
      72: remValue(72),
      80: remValue(80),
      88: remValue(88),
      96: remValue(96),
      112: remValue(112),
      136: remValue(136),
      152: remValue(152),

    }
  }
}