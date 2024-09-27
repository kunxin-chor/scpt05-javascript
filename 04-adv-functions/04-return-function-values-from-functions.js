function calculateGST(amount, percentage) {
    return percentage/100 * amount;
}

// call calculateGST with 9% both time
console.log(calculateGST(100, 9));
console.log(calcuateGST(200, 9));

function generateCalculateGSTFunction(percentage) {
    return function(amount) {
        return percentage/100 * amount;
    }
}

let gst10PercentCalculate = generateCalculateGSTFunction(10);
console.log(gst10PercentCalculate(100));
console.log(gst10PercentCalculate(200));