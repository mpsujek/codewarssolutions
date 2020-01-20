const {
  monkeyCountDoWhile,
  monkeyCountForLoop,
  monkeyCountFrom,
} = require('./count_monkeys');

const functionsToTest = [
  monkeyCountForLoop,
  monkeyCountFrom,
  monkeyCountDoWhile,
];

functionsToTest.forEach((functionsToTest) => {
  describe(`count_monkeys ${functionsToTest} function`, () => {
    test.each`
      input | expectedResult
      ${5}  | ${[1, 2, 3, 4, 5]}
      ${20} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
    `(
      'converts $input to $expectedResult with config: $configDescription',
      ({ input, expectedResult }) => {
        expect(functionsToTest(input)).toStrictEqual(expectedResult);
      },
    );
  });
});
