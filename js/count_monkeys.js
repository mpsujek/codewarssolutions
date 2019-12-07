// https://www.codewars.com/kata/count-the-monkeys/train/javascript

function monkeyCount(n) {
  const array = [];
  let i = 1;
  do{
     array.push(i);
     i++;
  } while (i < n + 1);
  return array;
 }

 module.exports = monkeyCount;
