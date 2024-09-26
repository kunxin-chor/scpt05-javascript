const prompt = require("prompt-sync")();

let date = prompt("Enter date: ");

let year = date.slice(0, 4);
let month = date.slice(5, 7);
let day = date.slice(8);

console.log("year =", year);
console.log("month =", month);
console.log("day =", day);