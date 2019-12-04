//https://www.codewars.com/kata/suitcase-packing/train/javascript

function fit_in(a, b, m, n) {
 return ((Math.pow(a,2) + Math.pow(b,2)) <= m * n);
}

module.exports = fit_in;
