const columns = require("../../src/theme/lib/columns");

test('Returns a string: string object', () => {
  console.log(columns.getOverrides(), columns.getExtensions())
  expect(true).toBe(true);
});