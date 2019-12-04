const fit_in = require('./suitcase_packing');


describe('suitcase_packing', () => {

  test('test for true', () => {
    expect(fit_in(1,2,3,2)).toBe(true);
  });

  test('test for false', () => {
    expect(fit_in(3,2,3,2)).toBe(false);
  });
});
