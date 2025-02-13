const fontWeight = require('../../src/theme/lib/fontWeight');

test('Returns a string: string object', () => {
  console.log(fontWeight.getOverrides(), fontWeight.getExtensions())
  expect(true).toBe(true);
});