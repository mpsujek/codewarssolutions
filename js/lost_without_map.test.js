const maps = require('./lost_without_map');


describe('lost without map tests', () => {

  test('Test-1 for simple multiplying 3 elements array', () => {
    expect(maps([1, 2, 3])).toStrictEqual([2, 4, 6]);
  });

  test('Test-2 for simple multiplying 5 element array', () => {
    expect(maps([4, 1, 1, 1, 4])).toStrictEqual([8, 2, 2, 2, 8]);
  });

});
