// how does JavaScript use passing functions as parameters
// to customize algorithim

function compareNumber(a, b) {
    // return -1 if a should come before b
    if (a < b) {
        return -1;
    }
    // return 1 if b shoud come before a
    if (a > b) {
        return 1;
    }
    return 0;
}

let numbers = [ 10, 11, 1, 2, 21, 22, 3];
// pass the reference to compareNumber as the first paramter
numbers.sort(compareNumber);
console.log("numbers =", numbers);

let fruits = ["apples", "pear", "fig", "grapes", "strawberries"];
// sort the fruits array so that the strength with the least character will be first

function compareLength(a, b) {
    if (a.length < b.length) {
        return -1;
    }
    if (a.length > b.length) {
        return 1;
    }
    return 0;
}

fruits.sort(compareLength);
console.log(fruits);

fruits.sort(function(a,b){
    return a.length - b.length
})