// https://www.codewars.com/kata/count-the-monkeys/train/javascript

function monkeyCount(n) {
  const array = [];
  // first solution
  // let i = 1;
  // do{
  //    array.push(i);
  //    i++;
  // } while (i < n + 1);

  //
  for (let i = 1; i < n + 1 ; i++) {
    array.push(i);
  }
  return array;
 }

 module.exports = monkeyCount;
