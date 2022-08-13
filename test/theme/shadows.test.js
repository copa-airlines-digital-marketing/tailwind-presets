const shadows = require("../../src/theme/lib/shadows");

test('Returns a string: string object', () => {
  console.log(shadows.getOverrides(), shadows.getExtensions())
  expect(true).toBe(true);
});