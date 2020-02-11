const count = require('./count-letter-in-string');

describe('Count letter in string', () => {
  test('Should return object with letters count', () => {
    expect(count('aba')).toEqual({ a: 2, b: 1 });
  });
});
