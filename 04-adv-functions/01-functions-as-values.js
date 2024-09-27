// functions are values in JavaScript
// Functions are FIRST CLASS CITIZEN in JavaScript
// 1. can be assigned to a variable
// 2. can be passed as a parameter
// 3. can be returned from a function
function foobar(x, y) {
    return x + y;
}

let f = foobar;

console.log(f(2,3));