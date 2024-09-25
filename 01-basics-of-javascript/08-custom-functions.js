// first, begin with the keyword: "function"
// second, put the name of the function
//         - cannot begin with numbers
//         - cannot contain special symbols such as */- (_ and $)
//         - cannot be a reserved keywords
// third - parenthesis
// fourth - add curly braces
// fifth - think of the parameter: what parameters needed by the function to solve the problem
// six - how do I go from the parameters to the solution?
// seventh - return the solution to the function
function addTwo(number1, number2) {
    let sum  = number1 + number2;
    return sum; // return will end the function, and whatver value is returned
                // will be the result of the function
} // end addTwo

// store the sum of 10 and 15 in the n1 variable
let n1 = addTwo(10, 15);

// calculate the area of circle
function calculateCircleArea(radius) {
    let area = 22/7 * radius**2;
    return area;

}

let area = calculateCircleArea(15);
console.log(area);

function calculateCircleAreav2(radius) {
    let area = 22/7 * radius ** 2;
    console.log(area); // console.log is meant for humans to see
                       // the program has no access what you had console.log
    // if a function does not explictly has a return it actually return undefined;
}

let a2 = calculateCircleAreav2(100);
console.log("a2 =", a2);