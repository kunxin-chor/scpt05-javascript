console.log("AND")
console.log("true && true =>", true && true);
console.log("true && false =>", true && false);
console.log("false && true =>", false && true);
console.log("false && false =>", false && false);

console.log("OR");
console.log("true or false =>", true || false);
console.log("false or true =>", false || true);
console.log("true || true =>", true || true);
console.log("false || false =>", false || false);

// OR has lower precedence than AND

console.log( true || false && true);
// => console.log(true || false)
// => console.log(true);

console.log( (true || false && true));

console.log(!true);