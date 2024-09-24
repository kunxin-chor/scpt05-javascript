// Operators are basically symbols that are functions
console.log("2 + 2 =", 2 + 2); // <== 4

// Most operators are arthmetic operators and assignment operators
console.log("5 % 3 =", 5 % 3);
console.log(2 % 2) // == any even number % 2 will be 0
console.log(5 - 3); // <== 2
console.log(2 * 2); // <== 4
console.log(10 /2); // <== 5
console.log(3**2); // <== 8

console.log(2 + 2 * 3); // <== 8
console.log(2**3+1); // <== 9
console.log(2*(2+3)*3); // <== can use parenthesis to force the order

let a = 3;
let b = 4;
let c = a * b + 3;
// 1. variable subsitution
// => let c = (3 * 4 + 3)
// 2. apply arthmetic operators
// => let c = (12 + 3)
// => let c = 15;
// 3. assignment is always the last
// the right hand side of an assignment operator must
// be a value for the assignment to take place

let x = 4;
let y = x;  // JavaScript will simplify this to let y = 4;
y = y + 1;
console.log(x);
