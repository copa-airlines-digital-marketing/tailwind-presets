const BASE_COLORS = {
  inherit: 'inherit',
  transparent: 'transparent',
  current: 'currentColor',
  primary: {
    DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
    ultralight: 'rgb(var(--color-primary-ultralight) / <alpha-value>)',
    light: 'rgb(var(--color-primary-light) / <alpha-value>)',
    dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
    ultradark: 'rgb(var(--color-primary-ultradark) / <alpha-value>)',
  },
  secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
  backgound: {
    lightblue: 'rgb(var(--color-background-lightblue) / <alpha-value>)',
    paper: 'rgb(var(--color-background-paper) / <alpha-value>)',
  },
  alternative: {
    pardo: 'rgb(var(--color-pardo) / <alpha-value>)',
    gold: 'rgb(var(--color-gold) / <alpha-value>)',
    darkorange: 'rgb(var(--color-darkorange) / <alpha-value>)',
    lightorange: 'rgb(var(--color-lightorange) / <alpha-value>)',
    prefermemberblue: 'rgb(var(--color-prefermemberBlue) / <alpha-value>)',
  },
  status: {
    warning: 'rgb(var(--color-warning) / <alpha-value>)',
    error: 'rgb(var(--color-error) / <alpha-value>)',
    success: 'rgb(var(--color-success) / <alpha-value>)',
  },
  grey: {
    800: 'rgb(var(--color-grey-800) / <alpha-value>)',
    700: 'rgb(var(--color-grey-700) / <alpha-value>)',
    600: 'rgb(var(--color-grey-600) / <alpha-value>)',
    500: 'rgb(var(--color-grey-500) / <alpha-value>)',
    400: 'rgb(var(--color-grey-400) / <alpha-value>)',
    300: 'rgb(var(--color-grey-300) / <alpha-value>)',
    200: 'rgb(var(--color-grey-200) / <alpha-value>)',
    100: 'rgb(var(--color-grey-100) / <alpha-value>)',
    75: 'rgb(var(--color-grey-75) / <alpha-value>)',
    0: 'rgb(var(--color-grey-0) / <alpha-value>)',
  }
}

const getOverrides = () => {
  return BASE_COLORS
}

const getExtensions = () => {
  return {}
}

module.exports = {
  getOverrides: getOverrides,
  getExtensions: getExtensions
}