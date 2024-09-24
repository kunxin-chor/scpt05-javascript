const prompt = require('prompt-sync')();

// how to solve programming problem
// 1. define the variables that store the problem and the solution
// 2. we need to know the process of going from the  problem to solution 
// 3. we need to show the user the solution
let weight = prompt("Please enter your weight: ");
weight = Number(weight);

let height = Number(prompt("Please enter your height: "));

let bmi = weight / height ** 2;

console.log("Your bmi is", bmi.toFixed(2));

