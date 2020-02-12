const toWeirdCase = require('./weird-string-case');

describe('Weird string case', () => {
  test('Return string in weird case', () => {
    expect(toWeirdCase('This is a test')).toBe('ThIs Is A TeSt');
  });
});
