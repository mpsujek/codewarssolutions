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

const namesArray = ['for loop', 'from', 'do while'];

functionsToTest.forEach((functionsToTest, i) => {
  describe(`count_monkeys with ${namesArray[i]} function`, () => {
    test.each`
      input | expectedResult
      ${5}  | ${[1, 2, 3, 4, 5]}
      ${20} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
    `(
      `converts $input to $expectedResult with ${namesArray[i]}`,
      ({ input, expectedResult }) => {
        expect(functionsToTest(input)).toStrictEqual(expectedResult);
      },
    );
  });
});
