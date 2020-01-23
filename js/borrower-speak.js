// https://www.codewars.com/kata/borrower-speak/train/javascript

function borrow(s) {
  const specialCharactersRegexp = /[!@#$%^&?*;,:.]/g;
  return s.replace(specialCharactersRegexp, "").replace(/\s/g, "").toLowerCase();
}

module.exports = borrow;
