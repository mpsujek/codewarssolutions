// https://www.codewars.com/kata/testing-1-2-3/train/javascript

const number=function(array){
  return array.map(function(el, i){
     el = `${i+1}: ${el}`;
     return el;
    })
}

module.exports = number;
