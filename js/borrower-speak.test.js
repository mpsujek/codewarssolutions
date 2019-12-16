const borrow = require('./borrower-speak');


describe('borrower-speak test first test', () => {

  test('change string to lower case without specials', () => {
    expect(borrow('KK:bjpOrzEEWtEv..x?,U:K pvt.;;GEWOYKE;;;jWEOjdYA ,n:;.GhbAQ;vIl;OSdEv:IIb !;x!f!?lbhO?t??xQOStME:;')).toBe('kkbjporzeewtevxukpvtgewoykejweojdyanghbaqvilosdeviibxflbhotxqostme');
  });

});


