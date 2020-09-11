let sideLength = prompt("What is the length of the side?");
let circleRadius = prompt("What is the radius of the circle?");

let squareArea = (sideLength ** 2);
let squarePerimeter = (sideLength * 4);
let cubeAreaSurface = (6 * (sideLength ** 2));
let cubeVolume = (sideLength ** 3);
let circleArea = (Math.PI * (circleRadius ** 2));
let circleCircumference = (2 * Math.PI * circleRadius);
let sphereAreaSurface = (4 * Math.PI * (circleRadius ** 2));
let sphereVolume = ((4 / 3) * Math.PI * (circleRadius ** 3));

console.log("The area of the square is:");
console.log(squareArea);
console.log("The perimeter of the square is:");
console.log(squarePerimeter);
console.log("The surface area of the cube is:");
console.log(cubeAreaSurface);
console.log("The volume of the cube is:");
console.log(cubeVolume);
console.log("The area of the circle is:");
console.log(circleArea);
console.log("The circumference of the circle is:");
console.log(circleCircumference);
console.log("The surface area of the sphere is:");
console.log(sphereAreaSurface);
console.log("The volume of the sphere is:");
console.log(sphereVolume);