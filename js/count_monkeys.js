// https://www.codewars.com/kata/count-the-monkeys/train/javascript

function monkeyCount(n) {
  const array = [];
  // solution with do while
  // let i = 1;
  // do{
  //    array.push(i);
  //    i++;
  // } while (i < n + 1);

  // solution with for loop
  // for (let i = 1; i < n + 1 ; i++) {
  //   array.push(i);
  // }
  // return array;

  // solution with Array.from
  return  Array.from({length : n}, (e, i ) => i + 1);

 }

 module.exports = monkeyCount;
