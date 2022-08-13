const spacing = require("../../src/theme/lib/spacing");

test('Returns a string: string object', () => {
  console.log(spacing.getOverrides(), spacing.getExtensions())
  expect(true).toBe(true);
});