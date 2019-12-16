// https://www.codewars.com/kata/borrower-speak/train/javascript

function borrow(s){
  return s.replace(/[!@#$%^&?*;,:.]/g, "").replace(/\s/g, '').toLowerCase();
}

module.exports = borrow;
