const prompt = require("prompt-sync")();

let weight = parseFloat(prompt("Enter your weight: "));
let height = parseFloat(prompt("Enter your height: "));

if (weight && height) {
    console.log("BMI =", weight/height**2);
} else {
    console.log("Sorry, double check your width and height");
}