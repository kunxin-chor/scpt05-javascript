// display each fruit on its own line
let fruits = ["apples", "bananas", "strawberries", "oranges"];

// use the for..let loop to extract one item
// at a time from the array
for (let f of fruits) {
    console.log(f);
}

// if we need both the index and the element, we can use
// an older syntax
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}