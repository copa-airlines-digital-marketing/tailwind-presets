import ThemeTest from '.';
import * as Colors from '../../src/theme/colors';
import * as Content from '../../src/theme/content';
import * as FontSize from '../../src/theme/fontSize';
import * as FontFamily from '../../src/theme/fontfamily';
import * as Screens from '../../src/theme/screens';
import * as Spacing from '../../src/theme/spacing';

import Settings from '../../src/index';

console.log(Settings);

ThemeTest('Theme - Colors', Colors);
ThemeTest('Theme - Content', Content);
ThemeTest('Theme - Font Size', FontSize);
ThemeTest('Theme - Font Family', FontFamily);
ThemeTest('Theme - Screens', Screens);
ThemeTest('Theme - Spacing', Spacing);
