// https://www.codewars.com/kata/reviews/567486aaed8cf6cf5600000c/groups/5d5feef0344de600014adff9

function getMiddle(s) {
    //Code goes here!
    const word = s.split("");
    const letterNumber = word.length;
    const itsOdd = letterNumber % 2;
    let result;


    if (itsOdd) {
        result = word[Math.round((letterNumber / 2) - 1)];
    } else {
        result = word[letterNumber / 2 - 1] + word[letterNumber / 2];
    }
    return result;
}

// http://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

function arithmetic(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b;
            break;
        case 'subtract':
            return a - b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'divide':
            return a / b;
            break;
    }
}


//   http://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

function oddOrEven(array) {
    const sum = array.reduce((a, b) => {
        return b + a;
    }, 0);
    return (sum % 2) ? "odd" : "even";
}


//  http://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
function reverseLetter(str) {
    return str.split('').reverse().join('').replace(/[^a-zA-Z]+/g, "");
}

// http://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
function narcissistic(value) {
    const array = value.toString().split('');
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += Math.pow(parseInt(array[i]), array.length);
    }
    if (value === result) {
        return true;
    } else return false;
}
