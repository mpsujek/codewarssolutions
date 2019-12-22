// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(string){
  const newArr = string.split('').map((letter, i) => {
      if (letter === ' '){
          i+1;

      }
      return  (i % 2 === 0) ? letter.toUpperCase() : letter.toLowerCase();

 })
 return newArr.join('');
}

module.exports = toWeirdCase;
