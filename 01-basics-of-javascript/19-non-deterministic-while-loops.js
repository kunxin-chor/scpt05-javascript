const prompt = require("prompt-sync")();

// while loops usually used for non-determinstic loops
// but for loops usually used for determinstic loops
let x = parseInt(prompt("Enter a number greater than 0: "));
while (x <=0) {
    x = parseInt(prompt("Enter a number greater than 0: "));

}
console.log("Your number is", x);

