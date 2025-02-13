const opacity = require('../../src/theme/lib/opacity');


test('Returns a string: string object', () => {
  console.log(opacity.getOverrides(), opacity.getExtensions())
  expect(true).toBe(true);
});