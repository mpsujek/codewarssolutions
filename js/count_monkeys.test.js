const monkeyCount = require('./count_monkeys');


describe('count_monkeys', () => {

  test(' When it get 5 it should return array of numbers from 1 to 5', () => {
    expect(monkeyCount(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('When it get 20 it should return array of numbers from 1 do 20', () => {
    expect(monkeyCount(20)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
