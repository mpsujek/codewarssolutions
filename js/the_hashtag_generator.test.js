const generateHashtag = require('./the_hashtag_generator');

describe('generateHashtag', () => {
  test('When it gets Do we have A hashtag it should return  #DoWeHaveAHashtag ', () => {
    expect(generateHashtag('Do We have A Hashtag')).toBe('#DoWeHaveAHashtag');
  });

  test('When it gets Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong should return false', () => {
    expect(
      generateHashtag(
        'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong',
      ),
    ).toBe(false);
  });
});
