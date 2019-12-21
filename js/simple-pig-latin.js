// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  const wordsArray = str.split(' ');
  const resultArray = wordsArray.map((x, i) => {
      const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      let arr = x.split('');
      const [first, ...rest] = arr;
      arr = [...rest,first];
      if(format.test(arr.join(''))){
          return arr.join('');
      }
      else {
      return `${arr.join('')}ay`;
      }


  })

  return resultArray.join(' ');
}

module.exports = pigIt;
