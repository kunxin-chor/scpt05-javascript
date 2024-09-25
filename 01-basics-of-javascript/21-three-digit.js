const prompt = require("prompt-sync")();

// what we want: is a three digit number
// what we want: number >= 100 && number <= 999
// but the while loop wants is the opposite: number < 100 || number > 999

// let userInput = parseInt(prompt("Enter the number: "));
// while (userInput < 100 || userInput > 999) {
//  userInput = parseInt(prompt("Enter the number: "));
// }
// console.log("Your number is", userInput);

let userInput = null;
while (true) {
    userInput = parseInt(prompt("Enter the number: "));
    if (userInput >= 100 && userInput <= 999) {
        break; // break means to exit the while oop
    }
}