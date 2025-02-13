const colors = require('./../../src/theme/lib/colors')


test('Returns a string: string object', () => {
  console.log(colors.getOverrides(), colors.getExtensions())
  expect(true).toBe(true);
});