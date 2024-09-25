const prompt = require("prompt-sync")();

// a cinema charges $12 for adult and $6 for kids.
// adult are anywhere from 13 years old ownards
// kids are from 0 to 12 years.
let age = parseInt(prompt("Please enter the age: "));

// `if` allows us do branching
// we can decide to execute some line of codes but don't execute others
// if (<condition>) ==> conditon is an expression that must simplifies to boolean true or false
if (age <= 12 ) {
    console.log("You only need to pay $6");
}
else {
    console.log("You must pay $12");
}

console.log("Thank you for your patronage");