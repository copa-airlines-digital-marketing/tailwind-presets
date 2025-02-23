const createFontSizeObject = (...args: string[]) => {
  return [
    args[0],
    {
      letterSpacing: args[2],
      lineHeight: args[1],
    },
  ];
};

const BASE_FONT_FAMILY = {
  u6: createFontSizeObject(
    'var(--font-size-u6)',
    'var(--line-height-u6)',
    'var(--letter-spacing-u6)',
  ),
  u5: createFontSizeObject(
    'var(--font-size-u5)',
    'var(--line-height-u5)',
    'var(--letter-spacing-u5)',
  ),
  u4: createFontSizeObject(
    'var(--font-size-u4)',
    'var(--line-height-u4)',
    'var(--letter-spacing-u4)',
  ),
  u3: createFontSizeObject(
    'var(--font-size-u3)',
    'var(--line-height-u3)',
    'var(--letter-spacing-u3)',
  ),
  u2: createFontSizeObject(
    'var(--font-size-u2)',
    'var(--line-height-u2)',
    'var(--letter-spacing-u2)',
  ),
  u1: createFontSizeObject(
    'var(--font-size-u1)',
    'var(--line-height-u1)',
    'var(--letter-spacing-u1)',
  ),
  b: createFontSizeObject('var(--font-size-b)', 'var(--line-height-b)', 'var(--letter-spacing-b)'),
  d1: createFontSizeObject(
    'var(--font-size-d1)',
    'var(--line-height-d1)',
    'var(--letter-spacing-d1)',
  ),
  d2: createFontSizeObject(
    'var(--font-size-d2)',
    'var(--line-height-d2)',
    'var(--letter-spacing-d2)',
  ),
  d3: createFontSizeObject(
    'var(--font-size-d3)',
    'var(--line-height-d3)',
    'var(--letter-spacing-d3)',
  ),
};

const getOverrides = () => ({});

const getExtensions = () => BASE_FONT_FAMILY;

export { getOverrides, getExtensions };
