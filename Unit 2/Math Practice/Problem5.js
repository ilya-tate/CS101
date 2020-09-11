let x1 = Number(prompt("What x1?"));
let y1 = Number(prompt("What y1?"));
let x2 = Number(prompt("What x1?"));
let y2 = Number(prompt("What y2?"));

let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
console.log(`The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance} units.`);