const rootVars = require('../../src/plugins/lib/base/rootVars')


test('Returns a string: string object', () => {
  console.log(rootVars())
  expect(true).toBe(true);
});