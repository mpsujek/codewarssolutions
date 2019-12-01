const likes = require('./26_09_19');


describe('26_09_19', () => {

  test('4 likes', () => {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
  });

  test('0 likes', () => {
    expect(likes([])).toBe('no one likes this');
  });
});
