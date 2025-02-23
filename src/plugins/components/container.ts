import plugin from 'tailwindcss/plugin';

export default () =>
  plugin(function ({ addComponents }) {
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
        },
      },
      '.container-grid': {
        display: 'grid',
        gridTemplateColumns: '16px 1fr 16px',
        '@screen sm': {
          gridTemplateColumns: '1fr 560px 1fr',
        },
        '@screen md': {
          gridTemplateColumns: '72px 1fr 72px',
        },
        '@screen lg': {
          gridTemplateColumns: '1fr 1224px 1fr',
        },
      },
    });
  });
