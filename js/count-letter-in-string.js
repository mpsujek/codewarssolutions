// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  const lettersCount = {};
  for (let i = 0; i < string.length; i++) {
    if (lettersCount[string[i]] == undefined) {
      lettersCount[string[i]] = 1;
    } else {
      lettersCount[string[i]]++;
    }
  }
  return lettersCount;
}

module.exports = count;
