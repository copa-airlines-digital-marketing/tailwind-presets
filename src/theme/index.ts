import * as Colors from './colors';
import * as Content from './content';
import * as FontFamily from './fontfamily';
import * as FontSize from './fontSize';
import * as Screens from './screens';
import * as Spacing from './spacing';

const getOverrides = () => {
  return {
    screens: Screens.getOverrides(),
  };
};

const getExtensions = () => {
  return {
    content: Content.getExtensions(),
    colors: Colors.getExtensions(),
    fontFamily: FontFamily.getExtensions(),
    fontSize: FontSize.getExtensions(),
    spacing: Spacing.getExtensions(),
  };
};

const getTheme = () => {
  return {
    ...getOverrides(),
    extend: {
      ...getExtensions(),
    },
  };
};

export default getTheme;
