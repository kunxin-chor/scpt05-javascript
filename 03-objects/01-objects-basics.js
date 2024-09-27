// define an object
let book = {
    "title":"The Lord of the Rings",
    "author":"JRR Tolkien",
    "year_published": 1950
}

// how to access the keys of an object?
// <object>.<property>
console.log("book.title =", book.title);

// syntax 2
console.log(book["title"]);

// we have syntax 2 IF THE KEY IS NOT
// a VALID VARIABLE NAME
// 1. cannot begin with a number
// 2. cannot have space or any other special characters besides _ and $
// 3. cannot be a reserved keyword (such as let, while, if etc.)
let car = {
    "brand name":"Toyata",
    "top speed": 120
}

// the `car` object uses invalid variable names for the properties (aka keys),
// so we have to use the [ ] to access them
console.log("car['brand name'] =>", car['brand name']);

// short forms for objects
// 1. if the property name is already a valid variable name,
// you don't need to state them as a string
let pet = {
    name:"Doggy",
    age: 13,
    breed:"Golden Retriever",
    "owner name":"John Wick"  // <-- discouraged. Stick to proper variable names for keys if possible
}

// 2. if the key of an object matches that of a defined variable,
// you just need to state the key
let userEmail = "jonsnow@asd.com";  // assume the user type in this via prompt()
let user = {
    userEmail   // same as "userEmail": userEmail
}