const {
  monkeyCountDoWhile,
  monkeyCountForLoop,
  monkeyCountFrom,
} = require('./count_monkeys');

describe('count_monkeys do while function', () => {
  test.each`
    input | expectedResult
    ${5}  | ${[1, 2, 3, 4, 5]}
    ${20} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
  `(
    'converts $input to $expectedResult with config: $configDescription',
    ({ input, expectedResult }) => {
      expect(monkeyCountDoWhile(input)).toStrictEqual(expectedResult);
    },
  );
});

describe('count_monkeys for loop', () => {
  test.each`
    input | expectedResult
    ${5}  | ${[1, 2, 3, 4, 5]}
    ${20} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
  `(
    'converts $input to $expectedResult with config: $configDescription',
    ({ input, expectedResult }) => {
      expect(monkeyCountForLoop(input)).toStrictEqual(expectedResult);
    },
  );
});
describe('count_monkeys from', () => {
  test.each`
    input | expectedResult
    ${5}  | ${[1, 2, 3, 4, 5]}
    ${20} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
  `(
    'converts $input to $expectedResult with config: $configDescription',
    ({ input, expectedResult }) => {
      expect(monkeyCountFrom(input)).toStrictEqual(expectedResult);
    },
  );
});
