// Uniquely JavaScript Values
let a; // <== NOT ENCOURAGED
console.log("a =", a);  // <== undefined
console.log(a + 3); // <==  NaN (not a number)

// we dislike Undefined and NaN
console.log(a+3/20); // <== NaN

// a + b + c / d * 100 <== NaN

console.log(4/0); // <== Inf
console.log(4/0 + 4); //<== Inf

// Null values
// Usually it's good if you want a variable to contain nothing, set it to null
let myBonus = null;  // means nothing, no data. Null is only ever set by the programmers