const isPrime = require('./its_number_prime');


describe('its_number_prime', () => {

  test('If get 0 should return false', () => {
    expect(isPrime(0)).toBe(false);
  });

  test('If get 1 should return false', () => {
    expect(isPrime(1)).toBe(false);
  });

  test('If get 2 should return true', () => {
    expect(isPrime(2)).toBe(true);
  });

  test('If get 73 should return true', () => {
    expect(isPrime(73)).toBe(true);
  });

  test('If get 5099 should return true ', () => {
    expect(isPrime(5099)).toBe(true);
  });

});
