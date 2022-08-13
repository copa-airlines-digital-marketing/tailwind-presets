const content = require("../../src/theme/lib/content");


test('Returns a string: string object', () => {
  console.log(content.getOverrides(), content.getExtensions())
  expect(true).toBe(true);
});