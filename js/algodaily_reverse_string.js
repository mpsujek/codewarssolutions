// https://algodaily.com/challenges/reverse-a-string

function reverseString(str) {
    str = str.split('').reverse().join('');
    return str;
}