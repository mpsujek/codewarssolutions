// https://www.codewars.com/kata/ones-and-zeros/train/javascript

const binaryArrayToNumber = arr => {
    const toBinary = arr.toString(2).replace(/[^0-9\.]+/g, "");
    return parseInt(toBinary, 2);
};