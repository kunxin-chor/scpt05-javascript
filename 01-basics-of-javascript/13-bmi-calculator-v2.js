const prompt = require('prompt-sync')();

let width = parseFloat(prompt("Enter your height: "));
// only if width is a valid number, then go to the next step
if (width) {
    let height = parseFloat(prompt("Enter your height: "));
    if (height) {
        let bmi = width/height**2;
        console.log("Your BMI is ", bmi);
    } else {
        console.log("You have entered an invalid height");
    }
} else {
    console.log("You have entered an invalid width");
}