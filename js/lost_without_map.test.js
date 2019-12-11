const maps = require('./lost_without_map');


describe('maps', () => {

  test('test NaN', () => {
    expect(maps([1, 2, 3])).toStrictEqual([2, 4, 6]);
  });

  test('test false', () => {
    expect(maps([4, 1, 1, 1, 4])).toStrictEqual([8, 2, 2, 2, 8]);
  });

});
