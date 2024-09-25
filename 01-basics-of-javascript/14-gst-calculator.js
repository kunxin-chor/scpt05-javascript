const prompt = require("prompt-sync")();

let bill = parseFloat(prompt("Please enter the bill: "));
let gstPercentage = parseInt(prompt("Please enter the GST percentage: "));
gstPercentage = gstPercentage || 0; // set 0 as the default value
let gst = bill * (gstPercentage/100);
console.log("The GST is ", gst);