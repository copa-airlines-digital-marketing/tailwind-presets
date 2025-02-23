import plugin from 'tailwindcss/plugin';
import Colors from './colors';
import FontSize from './fontSize';
import LetterSpacing from './letterSpacing';
import LineHeight from './lineHeight';
import Spacing from './spacing';

export default () =>
  plugin(function ({ addBase }) {
    addBase({
      ':root': {
        ...Colors,
        ...FontSize,
        ...LetterSpacing,
        ...LineHeight,
        ...Spacing,
      },
    });
  });
