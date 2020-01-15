const {
  monkeyCountDoWhile,
  monkeyCountForLoop,
  monkeyCountFrom,
} = require('./count_monkeys');

describe('count_monkeys do while function', () => {
  test('returns an array of numbers from 1 to 5 when given 5', () => {
    expect(monkeyCountDoWhile(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('returns an array of n~umbers from 1 to 20 when given 20', () => {
    expect(monkeyCountDoWhile(20)).toStrictEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ]);
  });
});
describe('count_monkeys for loop', () => {
  test('returns an array of numbers from 1 to 5 when given 5', () => {
    expect(monkeyCountForLoop(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('returns an array of numbers from 1 to 20 when given 20', () => {
    expect(monkeyCountForLoop(20)).toStrictEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ]);
  });
});
describe('count_monkeys from', () => {
  test('returns an array of numbers from 1 to 5 when given 5', () => {
    expect(monkeyCountFrom(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('returns an array of numbers from 1 to 20 when given 20', () => {
    expect(monkeyCountFrom(20)).toStrictEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ]);
  });
});
