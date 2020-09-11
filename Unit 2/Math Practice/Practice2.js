let principalDollars = Number(prompt("What is the starting amout of money in USD?"));
let ratePrct = Number(prompt("What is the rate in percent?"));
let timeYrs = Number(prompt("What is the time in years?"));

let amountFinal = principalDollars * (1 + (ratePrct / 100) * timeYrs);
console.log(`The final amount of money after ${timeYrs} at a ${ratePrct}% increase will be $${amountFinal.toFixed(2)}.`);