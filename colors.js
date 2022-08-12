module.exports = {
  inherit: 'inherit',
  transparent: 'transparent',
  current: 'currentColor',
  primary: {
    ultradark: '#001A66',
    dark: '#002880',
    light: '#0E68FF',
    main: '#0032A0',
    ultralight: '#D6E3FF',
    faded: `#0E68FF${fade[40]}`
  },
  secondary: {
    main: '#00A3E0',
    faded: `#00A3E0${fade[50]}`
  },
  pardo: '#866D4B',
  gold: '#AD7C59',
  'dark-orange': '#B15C37',
  'light-orange': '#E2C070',
  'prefermember-blue': '#072241',
  bg: {
    'light-blue': '#EFF5FF',
    paper: '#FCFCFC'
  },
  warning: {
    main: '#FFC82C',
    faded: `#FFC82C${fade[15]}`
  },
  error: {
    main: '#D52525',
    faded: `#D52525${fade[15]}`
  },
  success: {
    main: '#0C7E3E',
    faded: `#0C7E3E${fade[15]}`
  },
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
    '50-20': `#FFFFFF${fade[20]}`,
    '50-10': `#FFFFFF${fade[10]}`
  },
  fares: {
    economy: {
      basic: '#006CB3',
      classic: '#0E4A81',
      full: '#0D3050'
    },
    business: {
      promo: '#4B5D67',
      full: '#283238'
    },
    special: '#2A7795',
    first: '#000000'
  }
}