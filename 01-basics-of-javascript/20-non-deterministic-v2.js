const prompt = require("prompt-sync")();

let x = parseInt(prompt("Enter a number greater than 0"));
while (x <=0) {
    // make sure use back original x variable here
    x = parseInt(prompt("Enter a number greater than 0"));
}
console.log("Your number is", x);