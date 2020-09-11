let valueInit = Number(prompt("What is the initial value of the arithmetic sequence?"));
let dif = Number(prompt("What is the difference between terms in the arithmetic sequence?"));
let termNum = Number(prompt("Which term's value of the arithmetic sequence are you looking for?"));

let valueTermNum = valueInit + ((termNum - 1) * dif);
console.log(`The value of term ${termNum} is ${valueTermNum}.`);