let number1 = 10;
let number2 = number1;
number2++;
console.log(number1);

// arrays are REFERENCE values
let fruits = ["apples", "bananas"];
let fruits2 = fruits;
fruits.push("pineapples");
console.log(fruits2);
