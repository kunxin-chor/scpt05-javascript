

let employee = {
    'name':'Tan Ah Kow',
    'role':'Manager',
    'pay': 5000
};

employee.email = "tanahkow@gemail.com";

// keys: use let <key> in <object>
for (let eachKey in employee) {
    console.log(eachKey, "=>", employee[eachKey]);
}

// use Object.keys(employee)
console.log(Object.keys(employee));

console.log(Object.values(employee));

// key value pair of objects in one array
console.log(Object.entries(employee));

// advanced syntax
for (let [key, value] of Object.entries(employee)) {
    console.log(key, " is ", value);
}

console.log("Does the role key exists in the employee object =>", employee.hasOwnProperty('role'));


// instead of:
if (employee.hasOwnProperty("department")) {
    console.log("Department key doesn't exists in the object")
}

// the flaws for both approaches is that they will treat 0 and "" as not existing
if (!employee.department) {
    console.log("Department key doesn't exists in the object")
}


if (employee.department) {
    console.log("Deprtment key exists in the object")
}