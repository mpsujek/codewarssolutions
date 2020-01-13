const well = require('./well_of_ideas');


describe('well_of_ideas', () => {

  test('When it gets only bad ideas should be Fail', () => {
    expect(well(['bad', 'bad', 'bad'])).toBe('Fail!');
  });

  test('If it gets minimum one or two good ideas should be Publish', () => {
    expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toBe('Publish!');
  });

  test('If its more than two good ideas should return I smell a series ', () => {
    expect(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toBe('I smell a series!');
  });

});
