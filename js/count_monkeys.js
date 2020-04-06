// https://www.codewars.com/kata/count-the-monkeys/train/javascript

function monkeyCountDoWhile(n) {
  const array = [];
  let i = 1;
  do {
    array.push(i);
    i++;
  } while (i < n + 1);
  return array;
}

function monkeyCountForLoop(n) {
  const array = [];
  for (let i = 1; i < n + 1; i++) {
    array.push(i);
  }
  return array;
}

function monkeyCountFrom(n) {
  return Array.from(
    {
      length: n,
    },
    (e, i) => i + 1,
  );
}

module.exports = {
  monkeyCountDoWhile: monkeyCountDoWhile,
  monkeyCountForLoop: monkeyCountForLoop,
  monkeyCountFrom: monkeyCountFrom,
};
