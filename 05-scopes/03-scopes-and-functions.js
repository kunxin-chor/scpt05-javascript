// all the parameters of a function
// are scoped to the function (i.e they 
// belong to that function's scope)
function foo(x) {
    x = 3;
}

function bar(x) {
    x = 4;
}

let x = 10;
foo(x);
bar(x);
console.log(x);