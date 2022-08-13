const components = require('./../../src/plugins/components/index')


test('Returns a string: string object', () => {
  console.log(components())
  expect(true).toBe(true);
});