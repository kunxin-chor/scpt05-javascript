// an array allow us to store multiple values as one value

// we want to present a list of fruits
let fruit1 = "apples";
let fruit2 = "bananas";
let fruit3 = "pineapples";

// instead of having one variable per value, we use
// an array which store multiple values in it
let fruits = ["apples", "bananas", "pineapples", "durians", "grapes", "oranges"];

// we can access items (i.e element) in an array by its index
// first item is index 0
console.log("fruits[1] =>", fruits[1]);

// arrays can store different types of data
let rojak = [42, 3.14, "apples", true, [1,2,3] ];

// nested array access:
console.log("Get index 2 of the array that is in index 4 of the rojak array =>", rojak[4][2]);

// array in JavaScript has no maximum length
// (unlike C, C++, C#, Java etc.)
let guest = [];  // empty array 

// alternatively:
let shoppingCart = new Array();

// how to do add to the back of an array
guest.push("Tony Stark");
guest.push("Peter Parker");
console.log(guest);

// slicing an array will not change the original array
console.log("fruits.slice(2, 4) =>", fruits.slice(2, 4));

// splice: is used for removing and replacing items in an array
// this will change the array that is called on

// remove one item starting from index 2 from the fruits array
fruits.splice(2, 1);
console.log("fruits after splice(2,1) =>", fruits);

