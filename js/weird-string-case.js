// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(string) {
  return string
    .split(' ')
    .map((word) => {
      return word
        .split('')
        .map((letter, i) => {
          return i % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}

module.exports = toWeirdCase;
