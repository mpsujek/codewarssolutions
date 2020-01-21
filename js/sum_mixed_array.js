function sumMix(x){
  return x.reduce((a, b) => Number(a) + Number(b), 0);
}
module.exports = sumMix;
