const parse = require('./make_dead_fish_swim');


describe('make_dead_fish_swim', () => {

  test('test 1', () => {
    expect(parse('iiisdoso')).toStrictEqual([ 8, 64 ]);
  });

  test('test 2', () => {
    expect(parse('iiisxxxdoso')).toStrictEqual([ 8, 64 ]);
  });
});
