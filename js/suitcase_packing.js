//https://www.codewars.com/kata/suitcase-packing/train/javascript

function fit_in(a, b, m, n) {
  if((Math.pow(a,2) + Math.pow(b,2)) <= m * n){
      return true;
  }
  else{
      return false;
  }
}
