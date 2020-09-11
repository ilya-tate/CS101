let cylRadius = Number(prompt("What is the radius of the cylinder in inches?"));
let cylHeight = Number(prompt("What is the height of the cylinder in feet?"));

let cylVolFt = Math.PI * ((cylRadius / 12) **2) * cylHeight;
let cylVolIn = Math.PI * cylRadius**2 * (cylHeight * 12);

console.log("The volume of the cylinder is " + (Math.round(cylVolFt)) + " feet cubed, or " + (Math.round(cylVolIn)) + " inches cubed.");
console.log(`The volume of the cylinder is ${Math.round(cylVolFt)} feet cubed, or ${Math.round(cylVolIn)} inches cubed.`);