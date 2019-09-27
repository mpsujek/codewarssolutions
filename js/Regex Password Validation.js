// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

//Not sure what ist wrong but in 3 cases test not pass.

function validate(password) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){6,6}/.test(password);
}