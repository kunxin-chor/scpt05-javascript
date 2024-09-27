// arrays store multiple values in one value
// - usually used to store same data types
// objects store multiple values in one value
// - usually store a variety of data types
// - for structured datas
let database = [
    {
        "id": 1,
        "username":"ahkow",
        "password": "asd1234"
    },
    {
        "id": 2,
        "username":"cindymeh",
        "password":"abcdef"
    }
]


// - as a lookup table (aka dictionary)
let numberOfDaysInEachMonth = {
    "jan": 31,
    "feb": 28,
    "mar": 30
}

console.log("How many days are there in Jan?", numberOfDaysInEachMonth.jan);