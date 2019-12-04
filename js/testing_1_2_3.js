// https://www.codewars.com/kata/testing-1-2-3/train/javascript

var number=function(array){
  let i = 1;
  const newArray = array.map(function(el){
     el = `${i}: ${el}`;
     i++;
     return el;
    })

  return newArray;
}

module.exports = number;
