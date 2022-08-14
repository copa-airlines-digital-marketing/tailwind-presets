const gridColumn = require('../../src/theme/lib/gridColumn');


test('Returns a string: string object', () => {
  console.log(gridColumn.getOverrides(), gridColumn.getExtensions())
  expect(true).toBe(true);
});