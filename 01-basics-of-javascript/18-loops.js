// loops are for us to repeat certain lines over and over again
// a while loop consists of three things
// 1. the body: what do you want to keep repeating
// 2. a sentinel variable (aka guard): a variable that control how many times
// the loop should repeat
// 3. the guard condition: a condition to determine if the loop should repeat itself
// 4. the increment 
let count = 0; // sentinel variable

// the guard condition is the condition for the loop to repeat another round
while (count < 5) {
    console.log("I will bring my remember to bring my textbook"); 
    count++; 
}


// how to count from 1 to 10
console.log("Count from 1 to 10");
let x = 0;
while (x < 11) {
    console.log(x);
    x++;
}

console.log("Count from 5 to 10");
// count from 5 to 10
let y = 5;
while (y < 11) {
    console.log(y);
    y++;
}

console.log("Using a For loop: ")
for (let i = 0; i < 10; i++) {
    console.log(i);
}