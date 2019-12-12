const well = require('./well_of_ideas');


describe('well_of_ideas', () => {

  test('should be Fail', () => {
    expect(well(['bad', 'bad', 'bad'])).toBe('Fail!');
  });

  test('should be Publish', () => {
    expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toBe('Publish!');
  });

  test('should be ', () => {
    expect(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toBe('I smell a series!');
  });

});
