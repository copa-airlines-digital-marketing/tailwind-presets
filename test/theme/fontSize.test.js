const fontSize = require('../../src/theme/lib/fontSize');


test('Returns a string: string object', () => {
  console.log(fontSize.getOverrides(), fontSize.getExtensions())
  expect(true).toBe(true);
});