// tell the user their weight category based on their BMI
let bmi = 17;

// each `if` block is independednt of each other (hence the following is wrong)
// if (bmi < 18.5) {
//     console.log("Underweight");
// } 
// if (bmi < 25) {
//     console.log("Normal weight");
// }

// the correct way of checking weight category just by using if
if (bmi < 18.5) {
    console.log("Underweight");
}

if (bmi >= 18.5 && bmi <= 25) {
    console.log("Normal weight");
}

// or we can use the if/else if
// a squence if/else...if are one block and 
// each of the if is a mutually exclusive clause
if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi <= 25) {
    console.log("Normal Weight");
} else if (bmi <= 30) {
    console.log("Over weight");
} else {
    console.log("Obese");
}

if (bmi > 30) {
    console.log("Obese");
} else if (bmi > 25) {
    console.log("Overweight");
} else if (bmi > 18.5) {
    console.log("Normal Weight");
} else {
    console.log("Under weight");
}