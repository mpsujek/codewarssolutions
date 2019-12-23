// https://www.codewars.com/kata/remove-string-spaces/train/javascript

function noSpace(string) {
  const array = string.split(" ");
  const newArray = array.filter(function (el) {
    return el.length > 0;
  });
  return newArray.join("");

}

module.exports = noSpace;
