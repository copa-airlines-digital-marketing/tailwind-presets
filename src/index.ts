import Theme from 'src/theme';
import Plugins from 'src/plugins';

type Result = {
  plugins?: ReturnType<typeof Plugins>;
  theme?: ReturnType<typeof Theme>;
};

const cleanObject = (plugins: typeof Plugins, theme: typeof Theme) => {
  const result: Result = {};
  if (plugins().length > 0) result.plugins = plugins();
  if (Object.keys(theme()).length > 0) result.theme = theme();
  return result;
};

export default {
  corePlugins: {
    container: false,
  },
  ...cleanObject(Plugins, Theme),
};
