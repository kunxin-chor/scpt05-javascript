
const prompt = require("prompt-sync")();

console.log("Menu of Choices")
console.log("1. Sing a song");
console.log("2. Play a game");
console.log("3. Eat something");

let choice = parseInt(prompt("Enter your a choice: "));

switch (choice) {
    case 1:
        console.log("Singing twinke twinkle little star");
        break; // done with case 1, exit the switch
    case 2:
    case 3:
        console.log("Play a game or sing a song");
        break;
    default:
        console.log("You are supposed to choose from 1, 2 or 3");

}
