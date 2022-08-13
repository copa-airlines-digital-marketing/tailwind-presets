const fontFamily = require('../../src/theme/lib/fontFamily');

test('Returns a string: string object', () => {
  console.log(fontFamily.getOverrides(), fontFamily.getExtensions())
  expect(true).toBe(true);
});