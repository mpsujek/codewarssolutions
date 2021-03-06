const noSpaces = require('./remove_string_spaces');


describe('remove_string_spaces', () => {

  test('Remove of single spaces', () => {
    expect(noSpaces('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')).toBe('88Bifk8hB8BB8BBBB888chl8BhBfd');
  });

  test('Remove of multiple spaces', () => {
    expect(noSpaces('8 j 8   mBliB8g  imjB8B8  jl  B')).toBe('8j8mBliB8gimjB8B8jlB');
  });
});
