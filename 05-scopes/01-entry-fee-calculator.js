// Assume the zoo charges like this
// If it is weekday, $12 per adult and $7 per child
// If it is weekend, $20 per adult and $10 per child
// write a program, ask if it is weekend, and then how
// many adults and how many children and calculate
// the total admission fee
const prompt = require('prompt-sync')();

// when a variable is created with let or const
// and is not in any {} , it's in the global scope (hence
// those variables known as global scope)
let adults = parseInt(prompt("Number of adults: "));
let children = parseInt(prompt("Number of children: "));
let day = prompt("Which day is it (mon, tue, wed, thu, fri, sat or sun)");

let admissionFee = 0; // create the admissionFee variable in the global scope
if (day.toLowerCase() == 'sat' || day.toLowerCase() == 'sun' ) {
    admissionFee = adults * 20 + children * 10
} else {
    admissionFee = adults * 12 + children * 7;
}
console.log("Total admission fee=", admissionFee);