const removeUrlAnchor = require('./remove_anchor_from_url');
const removeAfterHash = require('./remove_anchor_from_url');


describe('remove part of url', () => {

  test('first solution', () => {
    expect(removeUrlAnchor('www.codewars.com#about')).toBe('www.codewars.com');
  });

  test('anotherSolution', () => {
    expect(removeAfterHash('www.codewars.com#about')).toBe('www.codewars.com');
  });
});
