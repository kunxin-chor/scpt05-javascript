// string functions

// 1. query functions
// tells you information about the String

let sentence = "the quick brown fox";

// includes: returns true if the substring is inside the string
console.log(sentence.includes('fox')) // <-- true

// indexOf: returns the index of the first occurence of the given substring
console.log(sentence.indexOf("quick")) // <-- 4

// if using indexOf, remember index 0 is a possible valid result
// so to check if a substring exists if using indexOf, 
// have to check if the result of indexOf is > -1
if (sentence.indexOf('t') > -1) {
    
}

// 2. functions that extract or transform a copy of the original string
let fruit = "apples";
console.log("fruit.toUpperCase() =>", fruit.toUpperCase());

let planet = "Venus";
planet = planet.toUpperCase(); // the only way to update a string in a variable is to replace it with a string
// => planet = "VENUS"
console.log(planet);

console.log("sentence.replace('fox', 'dog') =>", sentence.replace('fox', 'dog'));

// 3. create an entire new data structure from the string
let animals = "cats,dogs,donkeys";
let animalArray = animals.split(","); // the first parameter is the delimiter (i.e seprator)
console.log(animalArray[1]);