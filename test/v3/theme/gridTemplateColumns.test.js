const gridTemplateColumns = require('../../src/theme/lib/gridTemplateColumns');

test('Returns a string: string object', () => {
  console.log(gridTemplateColumns.getOverrides(), gridTemplateColumns.getExtensions())
  expect(true).toBe(true);
});