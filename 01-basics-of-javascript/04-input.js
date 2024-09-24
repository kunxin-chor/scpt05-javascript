// import in prompt-sync (prompty-sync is the package that allows us to use the prompt function)
const prompt = require("prompt-sync")();

// the prompt function will ask the user to type in something
// and only ends the waiting when the user presses ENTER.
// The result of the function will be whatever the user typed in
let name = prompt("Enter your name: ");

// assume: the user type in "Jon Snow"
// let name = "Jon Snow";
console.log("Welcome, ", name);

// prompt will always return a "string" 
let age = prompt("Enter your age: ");
// JavaScript allows you to add to an integer to String
// if we add string and integer, the integer will become a string
// and then JS will combine both strings together
console.log("Next year your age will be", age+1);
// => assume we enter "18"
// let age = "18"
// console.log("Next year blah blah", age+1);
//                                   =>"18"+1
//                                   =>"18"+"1"
//                                   =>"181"

// CORRECT
let anotherAge = prompt("Enter your age again: ");
// parseInt will become (or will simplify to) the
// integer version of its parameter
anotherAge = parseInt(anotherAge);
console.log("In one year time, your age is", anotherAge+1);

// how to convert a number to a string quickly
let n = 42 + "";
console.log(typeof(n)); // typeof allow us to inspect the data type of the value in a variable