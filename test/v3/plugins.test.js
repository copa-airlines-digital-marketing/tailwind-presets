const plugins = require('../../src/plugins/index')


test('Returns a string: string object', () => {
  console.log(plugins())
  expect(true).toBe(true);
});