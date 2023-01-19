// https://www.codewars.com/kata/ones-and-zeros/train/javascript

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

module.exports = binaryArrayToNumber;
