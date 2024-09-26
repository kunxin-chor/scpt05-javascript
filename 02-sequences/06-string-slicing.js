// slicing allows us to extract a portion of a string (i.e "substring")
// the original string is not changed

let sentence = "the quick brown fox";
// .slice will extract a substring from start index (inclusive)
// to end index (exclusive). It will return a copy of the substring
console.log("sentence.slice(0, 3)=>", sentence.slice(0, 3));
console.log("sentence.slice(10, 15)=>", sentence.slice(10, 15));

// Strings are immutable; once a string is created, it cannot
// be changed. If a string value is assigned to a variable
// the only way to 'change' the string is to reassign a new
// string to the variable
console.log("sentence after slicing =>", sentence);

// We can have one parameter for slice
// then it means starting slicing from that index and then all the way to the end
console.log("sentence.slice(4) =>", sentence.slice(4));

// slice by negative index (negative index goes backward)
console.log("sentence.slice(-3) =>", sentence.slice(-3))

// substr allows us to start extracting from an index and then by a specific length
// btw it's depreciated, and might be removed in future versions of JavaScript
console.log("sentence.substr(4, 8) =>", sentence.substr(4,8));