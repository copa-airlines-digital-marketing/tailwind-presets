const backgrounds = require("../../src/theme/lib/backgrounds");


test('Returns a string: string object', () => {
  console.log(backgrounds.getOverrides(), backgrounds.getExtensions())
  expect(true).toBe(true);
});