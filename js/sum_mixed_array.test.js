// https://www.codewars.com/kata/sum-mixed-array/train/javascript

const sumMix = require('./sum_mixed_array');

describe('sum_mixed_array', () => {

  test('Case 1 sumMix', () => {
    expect(sumMix([9, 3, '7', '3'])).toBe(22);
  });

  test('Case 2 sumMix', () => {
    expect(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toBe(42);
  });

  test('Case 3 sumMix', () => {
    expect(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])).toBe(41);
  });
});
