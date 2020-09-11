let practice = 0;

console.log(practice);

practice++;

console.log(practice);

practice += 5;

console.log(practice);


let area;
let height = 8;
let length = 10;

area = length * height / 2;

console.log(area); //40

//create an equation that solves for circumferance of a circle

//the radius of value 6.248

let circumferance;
let radius = 6.248;

circumferance = 2 * Math.PI * radius;

console.log(circumferance); //~39.2573

let input1 = NaN;
let input2 = NaN;

console.log(`Comparing ${input1} (${typeof(input1)}) and ${input2} (${typeof(input2)})`);

console.log(`When comapared with == is ${input1 == input2}`);
console.log(`When compared with === is ${input1 === input2}`);
console.log(`When compared with Object.is is ${Object.is(input1, input2)}`);