import { describe, expect, test } from 'vitest';

const getKeysLength = (value: object) => Object.keys(value).length;

const isString = (value: unknown): value is string => typeof value === 'string';

const flatRecursive = (acc: unknown[], value: unknown): unknown[] => {
  if (Array.isArray(value)) return value.reduce(flatRecursive, acc);

  if (typeof value === 'object' && value !== null) return flatRecursive(acc, Object.values(value));

  return [value, ...acc].flat();
};

const valueIsObject = (value: unknown): value is object =>
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value) &&
  !(value instanceof Date) &&
  !(value instanceof Map);

const isEmptyObject = (value: object) => Object.keys(value).length === 0;

const expectAllValuesString = (value: unknown) =>
  expect(flatRecursive([], value).every(isString)).toBe(true);

const expectObject = (value: unknown) => expect(valueIsObject(value)).toBe(true);

const expectToHaveNoProperties = (value: object) => expect(getKeysLength(value)).toEqual(0);

const expectToHaveProperties = (value: object) => expect(getKeysLength(value)).toBeGreaterThan(0);

const expectToHaveExtension = (value: object) => expect(value).toHaveProperty('getExtensions');

const expectToHaveOverrides = (value: object) => expect(value).toHaveProperty('getOverrides');

const expectAFunction = (value: unknown) => expect(typeof value).toBe('function');

const testValidObject = (value: unknown) =>
  test('Must be an object with extensions and overrides function', () => {
    expectObject(value);
    const obj = value as Record<string, unknown>;
    expectToHaveOverrides(obj);
    expectToHaveExtension(obj);
    expectAFunction(obj.getExtensions);
    expectAFunction(obj.getOverrides);
  });

const testThemePart = (part: string, value: unknown) =>
  test(`${part} must be an empty object or all properties value should be string`, () => {
    expectObject(value);
    const obj = value as Record<string, unknown>;
    if (isEmptyObject(obj)) expectToHaveNoProperties(obj);
    else {
      expectToHaveProperties(obj);
      expectAllValuesString(obj);
    }
  });

export default (testName: string, testObject: unknown) =>
  describe(testName, () => {
    testValidObject(testObject);
    const obj = testObject as Record<string, () => unknown>;
    testThemePart('Overrides', obj.getOverrides());
    testThemePart('Extensions', obj.getExtensions());
  });
