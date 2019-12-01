const likes = require('./youre_square');


describe('youre_square', () => {

  test('test NaN', () => {
    expect(isSquare(-1)).toBe(false);
  });

  test('test false', () => {
    expect(isSquare(3)).toBe(false);
  });

  test('test true', () => {
    expect(isSquare(25)).toBe(true);
  });

});
