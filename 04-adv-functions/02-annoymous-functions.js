// console.log(addThree(1,2,3));
// unable to call an annoymous function
// before it is created 

// define an annoymous function and
// assign it to the addThree variable
// NOT HOISTED, so you can only use
// them after you define them
let addThree = function(x, y, z) {
    return x+y+z;
}

console.log(addTwo(1,3));
console.log(addThree(4,5,6));

// name of the function: addTwo
// a named function is hoisted up
// this means when you run a .JS file
// the interperter will look for all
// the named functions and process them first
// (like putting up front)
function addTwo(x, y) {
    return x + y;
}
