const pigIt = require('./simple-pig-latin');

describe('simple-pig-latin', () => {
  test('When it get Pig latin is cool it return  igPay atinlay siay oolcay', () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
  });

  test('should not append -ay to punctuation', () => {
    expect(pigIt('Pig latin is cool ?')).toBe('igPay atinlay siay oolcay ?');
  });
});
