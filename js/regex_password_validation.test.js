const validatePassword = require('./regex_password_validation');

describe('Validate password by url', () => {
  test('djI38D55 expect to be true', () => {
    expect(validatePassword('djI38D55')).toBe(true);
  });
});
