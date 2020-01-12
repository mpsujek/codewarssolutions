const maps = require('./lost_without_map');


describe('lost without map tests', () => {

  test('Should return 3 elements array with multiplied elements by 2', () => {
    expect(maps([1, 2, 3])).toStrictEqual([2, 4, 6]);
  });

  test('Should return 5 elements array with multiplied elements by 2', () => {
    expect(maps([4, 1, 1, 1, 4])).toStrictEqual([8, 2, 2, 2, 8]);
  });

});
