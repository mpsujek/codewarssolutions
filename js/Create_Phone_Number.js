// https://www.codewars.com/kata/create-phone-number/train/javascript

function createPhoneNumber(numbers){
    var numbersArray = numbers;
    console.log('start');
    if (numbersArray.length === 10){
      return ('('+numbersArray[0]+numbersArray[1]+numbersArray[2]+')'+' '+numbersArray[3]+numbersArray[4]+numbersArray[5]+'-'+numbersArray[6]+numbersArray[7]+numbersArray[8]+numbersArray[9]);
      
    }
  }
  