// https://www.codewars.com/kata/create-phone-number/train/javascript

function createPhoneNumber(numbers) {
  if (numbers.length === 10) {
    const a = numbers.slice(0, 3).join('');
    const b = numbers.slice(3, 6).join('');
    const c = numbers.slice(6, 10).join('');
    return (`(${a})${b}-${c}`);

  } else {
    return new Error('Array length is not equal 10')
  }
}