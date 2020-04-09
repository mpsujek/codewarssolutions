const binaryArrayToNumber = require('./ones_and_zeros');

describe('binaryArrayToNumber', () => {
  test('When it gets array [0, 0, 0, 1] should return decimal number 1', () => {
    expect(binaryArrayToNumber([0, 0, 0, 1])).toBe(1);
  });
  test('When it gets array [1, 1, 1, 1] should return decimal number 15', () => {
    expect(binaryArrayToNumber([1, 1, 1, 1])).toBe(15);
  });
});
