// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  const lettersArr = string.split('');
  let lettersCount = {};

  lettersArr.forEach((element) => {
    if (lettersCount[element] === undefined) {
      lettersCount[element] = 1;
    } else {
      lettersCount[element]++;
    }
  });
  return lettersCount;
}

module.exports = count;
