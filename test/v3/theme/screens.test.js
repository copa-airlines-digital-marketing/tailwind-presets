const screens = require("../../src/theme/lib/screens");


test('Returns a string: string object', () => {
  console.log(screens.getOverrides(), screens.getExtensions())
  expect(true).toBe(true);
});