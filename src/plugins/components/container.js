const plugin = require('tailwindcss/plugin')

const getUtility = () => plugin(function ({
  addComponents
}) {
  addComponents({
    '.container': {
      maxWidth: 'calc(100% - 2rem)',
      '@screen sm': {
        maxWidth: '560px',
      },
      '@screen md': {
        maxWidth: 'calc(100% - 144px)',
      },
      '@screen lg': {
        maxWidth: '1224px',
      }
    }
  })
})

module.exports = getUtility