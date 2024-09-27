let car = {
    "topSpeed": 120,
    // functions in an objects are also known as "methods"
    "calculateDistance": function (hoursTravelled) {
        return this.topSpeed * hoursTravelled;
    }
}

console.log(car.calculateDistance(3));