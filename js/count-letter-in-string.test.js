const count = require('./count-letter-in-string');

describe('Count letter in string', () => {
  test('If get string aba should return object a:2 b:1', () => {
    expect(count('aba')).toEqual({"a": 2, "b": 1});
  });
});
