let valueInit = Number(prompt("What is the intial value of the geometric sequence?"));
let ratio = Number(prompt("What is the ratio of the geometric sequence?"));
let termsTotal = Number(prompt("What is the total number of terms in the geometric sequence?"));

let amountFinal = valueInit * (ratio ** (termNum - 1));
console.log(`The final value of the geometric sequence is ${amountFinal}.`);