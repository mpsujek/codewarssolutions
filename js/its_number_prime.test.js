const isPrime = require('./its_number_prime');


describe('its_number_prime', () => {

  test('test 0 false', () => {
    expect(isPrime(0)).toBe(false);
  });

  test('test 1 false', () => {
    expect(isPrime(1)).toBe(false);
  });

  test('test 2 true', () => {
    expect(isPrime(2)).toBe(true);
  });

  test('test 73 true', () => {
    expect(isPrime(73)).toBe(true);
  });

  test('test 5099 true ', () => {
    expect(isPrime(5099)).toBe(true);
  });

});
