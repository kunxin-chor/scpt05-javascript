let isRaining = true;
let isSunny = false;

console.log("bring umbrella =", isRaining || isSunny);

// In JavaScript, anything that is not 0, not NaN, not null, not undefined, not ""
// is considered as true (truthy values) when used in as a condition for `if`
console.log("1 && true =>", 1 && true);

// 0, NaN, null, undefined and "" are considered as false (ie falsy values)
let a;
if (a) {
    console.log("Theres something in a");
}

if ("0") {
    console.log("Can you see me?"); // <== "0" is not number 0, therefore not consideerd as fasly
}

// Trick number 1: use || to set default values
// Falsy value || Truthy Value => Truthy value