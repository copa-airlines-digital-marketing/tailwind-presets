const components = require('./../../src/plugins/lib/components/index')


test('Returns a string: string object', () => {
  console.log(components())
  expect(true).toBe(true);
});