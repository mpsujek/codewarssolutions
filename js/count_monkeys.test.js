const monkeyCount = require('./count_monkeys');


describe('count_monkeys', () => {

  test(' 1 monkeyCount', () => {
    expect(monkeyCount(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test(' 2 monkeyCount', () => {
    expect(monkeyCount(20)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
