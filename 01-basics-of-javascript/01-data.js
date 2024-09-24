// what are the data types
// in other words, what are the kind of data
// the language will support

// console.log is a function and JS has been 'programmed'
// to recongize it. Functions can recieve parameters (contextual information)
// within (....)
console.log("Hello World");

// basic data types in JavaScript

// numbers --> Integer (whole numbers)
console.log(42);

// floats (floating point number, i.e: decimal points number)
console.log(3.14);

// Strings: sequence of symbols and alphabets
console.log("The quick brown fox jumps over the lazy dog");
console.log('She sells seashells at the seashell');

// Booleans: just true or false, no quotes (must be lower-case)
console.log(true);
console.log(false);

// Variables in JavaScript
// A variable is a container for data. 
// Data not stored in variables are not remembered by the computer
let secretOfLife = 42;
let isRaining = true;

// assignment vs. equal (two different things)
let a = 3;
let b = 4;
a = b;
// => a = 4
// equal in JavaScript is:
console.log(a==b);

// Show the information inside a variable
console.log(secretOfLife);
// => console.log(42)

// some functions can have more than one contextual data
// (aka parameters)
console.log("Secret of Life =", secretOfLife);

// reassign to existing varaibles
secretOfLife = 43;

// you can even reassign different data types to an
// existing variable (i.e typeless)
let gstPercentage = 9;
gstPercentage = "nine percent"; // we can use the same variable to hold a string

// VERY IMPORTANT
// we only use `let` when using a variable for the first time
// let gstPercentage = 8;  <-- wrong! will create a new variable

// JavaScript has second type of variables known as "const"
// const and let both creates new variables
// const doesn't allow reassignment
const secondsInOneMinute = 60;
// secondsInOneMinute = 59; <-- cannot do reassignment

// The third way to define JavaScript variables
// DON'T USE
var foobar = "Foobar"; // it's old and it has weird behaviours