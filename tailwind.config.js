const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
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
        ultralight: '#D6E3FF'
      },
      secondary: '#00A3E0',
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
      error: '#D52525',
      success: '#0C7E3E',
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
    }
  }
};