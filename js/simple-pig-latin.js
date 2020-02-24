// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  const splittedStrToArray = str.split(' ');
  const resultArray = splittedStrToArray.map((x) => {
    const regexToTestString = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const arrAfterSwitch = moveFirstLetterToEnd(x);
    if (regexToTestString.test(arrAfterSwitch)) {
      return arrAfterSwitch;
    } else {
      return `${arrAfterSwitch}ay`;
    }
  });

  return resultArray.join(' ');
}

const moveFirstLetterToEnd = (string) => {
  let arr = string.split('');
  const [first, ...rest] = arr;
  arr = [...rest, first];
  return arr.join('');
};

module.exports = pigIt;
