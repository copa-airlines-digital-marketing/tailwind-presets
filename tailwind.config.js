const production = !process.env.ROLLUP_WATCH;
const fade = {
  100: 'ff',
  99: 'fc',
  98: 'fa',
  97: 'f7',
  96: 'f5',
  95: 'f2',
  94: 'f0',
  93: 'ed',
  92: 'eb',
  91: 'e8',
  90: 'e6',
  89: 'e3',
  88: 'e0',
  87: 'de',
  86: 'db',
  85: 'd9',
  84: 'd6',
  83: 'd4',
  82: 'd1',
  81: 'cf',
  80: 'cc',
  79: 'c9',
  78: 'c7',
  77: 'c4',
  76: 'c2',
  75: 'bf',
  74: 'bd',
  73: 'ba',
  72: 'b8',
  71: 'b5',
  70: 'b3',
  69: 'b0',
  68: 'ad',
  67: 'ab',
  66: 'a8',
  65: 'a6',
  64: 'a3',
  63: 'a1',
  62: '9e',
  61: '9c',
  60: '99',
  59: '96',
  58: '94',
  57: '91',
  56: '8f',
  55: '8c',
  54: '8a',
  53: '87',
  52: '85',
  51: '82',
  50: '80',
  49: '7d',
  48: '7a',
  47: '78',
  46: '75',
  45: '73',
  44: '70',
  43: '6e',
  42: '6b',
  41: '69',
  40: '66',
  39: '63',
  38: '61',
  37: '5e',
  36: '5c',
  35: '59',
  34: '57',
  33: '54',
  32: '52',
  31: '4f',
  30: '4d',
  29: '4a',
  28: '47',
  27: '45',
  26: '42',
  25: '40',
  24: '3d',
  23: '3b',
  22: '38',
  21: '36',
  20: '33',
  19: '30',
  18: '2e',
  17: '2b',
  16: '29',
  15: '26',
  14: '24',
  13: '21',
  12: '1f',
  11: '1c',
  10: '1a',
  9: '17',
  8: '14',
  7: '12',
  6: '0f',
  5: '0d',
  4: '0a',
  3: '08',
  2: '05',
  1: '03',
  0: '00'
}

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          width: 'calc(100% - 2rem)',
          '@screen sm': {
            maxWidth: '100%',
            width: '35rem'
          },
          '@screen md': {
            maxWidth: '100%',
            width: 'calc(100% - 9rem)'
          },
          '@screen lg': {
            maxWidth: '100%',
            width: '76.5rem'
          }
        }
      })
    }
  ],
  purge: {
    content: [
      "./src/App.svelte",
    ],
    enabled: production // disable purge in dev
  },
  theme: {
    colors: {
      primary: {
        ultradark: '#001A66',
        dark: '#002880',
        light: '#0E68FF',
        main: '#0032A0',
        ultralight: '#D6E3FF',
        faded: `#0E68FF${fade[40]}`
      },
      secondary: '#00A3E0',
      'secondary-faded': `#00A3E0${fade[50]}`,
      pardo: '#866D4B',
      gold: '#AD7C59',
      'dark-orange': '#B15C37',
      'light-orange': '#E2C070',
      'prefermember-blue': '#072241',
      bg: {
        'light-blue': '#EFF5FF',
        paper: '#FCFCFC'
      },
      warning: '#FFC82C',
      'warning-faded': `#FFC82C${fade[15]}`,
      error: '#D52525',
      'error-faded': `#D52525${fade[15]}`,
      success: '#0C7E3E',
      'success-faded': `#0C7E3E${fade[15]}`,
      grey: {
        800: '#121212',
        700: '#333333',
        600: '#666666',
        500: '#999999',
        400: '#AAAAAB',
        300: '#CCCCCB',
        200: '#DBDAD8',
        100: '#EFEFEE',
        50: '#FFFFFF',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem'
      }
    },
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1367px'
    },
    spacing: {
      1: '.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '2.5rem',
      6: '3rem',
      7: '3.5rem',
      8: '4rem',
      9: '4.5rem',
      10: '5rem',
      11: '5.5rem',
      12: '6rem',
      13: '7rem',
      14: '8.5rem',
      15: '9.5rem'
    }
  }
};