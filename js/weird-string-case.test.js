const toWeirdCase = require('./weird-string-case');

describe('weird string case', () => {

  test('Got string with spaces should return in weird case', () => {
    expect(toWeirdCase('This is a test')).toBe('ThIs Is A TeSt');
  });

});
