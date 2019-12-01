// https://www.codewars.com/kata/youre-a-square/train/javascript

var isSquare = function(n){
  if(Math.sqrt(n) !== NaN && Number.isInteger(Math.sqrt(n))){
      return true
  }
  else{
      return false;
  }
}
