// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  const lettersArr = string.split('');
  let lettersCount = {};

   lettersArr.forEach((i) => {
    if (lettersCount[lettersArr[i]] === undefined) {
      lettersCount[lettersArr[i]] = 1;
    } else {
      lettersCount[string[i]]++;
    }
  })
  return lettersCount;
}

module.exports = count;
