const rgba = (...args) => args.slice(0, 3).join(' ')

const getVars = () => {
  return {

    '--color-primary': rgba(0, 50, 160, 1),
    '--color-primary-light': rgba(14, 104, 255, 1),
    '--color-primary-dark': rgba(0, 50, 160, 1),
    '--color-primary-ultralight': rgba(214, 227, 255, 1),
    '--color-primary-ultradark': rgba(0, 26, 102, 1),

    '--color-secondary': rgba(0, 163, 224, 1),

    '--color-background-lightblue': rgba(239, 245, 255, 1),
    '--color-background-paper': rgba(252, 252, 252, 1),

    '--color-pardo': rgba(134, 109, 75, 1),
    '--color-gold': rgba(173, 124, 89, 1),
    '--color-darkorange': rgba(177, 92, 55, 1),
    '--color-lightorange': rgba(226, 192, 112, 1),
    '--color-prefermemberBlue': rgba(7, 34, 65, 1),

    '--color-warning': rgba(255, 200, 44, 1),
    '--color-error': rgba(213, 37, 37, 1),
    '--color-success': rgba(12, 126, 62, 1),

    '--color-grey-800': rgba(18, 18, 18, 1),
    '--color-grey-700': rgba(51, 51, 51, 1),
    '--color-grey-600': rgba(102, 102, 102, 1),
    '--color-grey-500': rgba(153, 153, 153, 1),
    '--color-grey-400': rgba(170, 170, 171, 1),
    '--color-grey-300': rgba(204, 204, 203, 1),
    '--color-grey-200': rgba(219, 218, 216, 1),
    '--color-grey-100': rgba(239, 239, 238, 1),
    '--color-grey-75': rgba(249, 249, 248, 1),
    '--color-grey-0': rgba(255, 255, 255, 1)

  }
}

module.exports = getVars