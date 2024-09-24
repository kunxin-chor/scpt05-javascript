// write a program
// that can calculate
// of a perimeter
// of a rectangle
// defined by the user
const prompt = require('prompt-sync')();

let length = parseInt(prompt("Enter the length "));
let width = parseInt(prompt("Enter the height: "));

let calculatedPerimeter = 2*(length + width);

console.log("The perimeter of the rectangle is", calculatedPerimeter);

