//https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

function parse( data ){
  const dataArray = data.split('');
  const arrayReturn = [];
  let element = 0;
  dataArray.map(function(el){
    (el === 'i') && (element += 1);
    (el === 'd') && (element -= 1);
    (el === 's') && (element = Math.pow(element, 2));
    (el === 'o') && (arrayReturn.push(element));
  })
    return arrayReturn;
}
module.exports = parse;
