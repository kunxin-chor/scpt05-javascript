function calculateFine(amount) {
    if (amount >= 1000) {
        return 0.2 * amount;
    } else {
        return 0.1 * amount;
    }
}

// string literal, string template literal
// We can put JavaScript expressions in a backtick string
let customerName = "John Wick";
let amount = 5000;
let letter = `Dear ${customerName},
    Your bill of $${amount} is due. Please make sure to pay by end of this month.
    If not, you will be asked to pay $${calculateFine(amount)} fine. 

    Regards,
    Your sales rep
    "We aim to serve"
    
    Reference No: 123/T
`;

console.log(letter);