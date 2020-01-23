const number = require('./testing_1_2_3');


describe('testing_1_2_3', () => {

  test('array with content', () => {
    expect(number(["a", "b", "c"])).toStrictEqual(["1: a", "2: b", "3: c"]);
  });

  test('empty array', () => {
    expect(number([])).toStrictEqual([]);
  });
});
