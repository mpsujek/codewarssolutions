// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

function validatePassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}
module.exports = validatePassword;
