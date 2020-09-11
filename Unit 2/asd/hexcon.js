let valDec = 34;


let hexa1 = Math.floor(valDec % 16);
let hexa1Rem1 = valDec % 16;
let hexa1Rem2 = Math.floor(hexa1 % 16)


console.log(hexa1)

if(hexa1 == 10) {
    hexa1 = "A";
}
if(hexa1 == 11) {
    hexa1 = "B";
}
if(hexa1 == 12) {
    hexa1 = "C";
}
if(hexa1 == 13) {
    hexa1 = "D";
}
if(hexa1 == 14) {
    hexa1 = "E";
}
if(hexa1 == 15) {
    hexa1 = "F";
}


// if(hex2 == 10) {
//     hex2 = "A";
// }
// if(hex2 == 11) {
//     hex2 = "B";
// }
// if(hex2 == 12) {
//     hex2 = "C";
// }
// if(hex2 == 13) {
//     hex2 = "D";
// }
// if(hex2 == 14) {
//     hex2 = "E";
// }
// if(hex2 == 15) {
//     hex2 = "F";
// }

console.log(`Hexadecimal Value: ${hexa1}`)





let dec = 157;

let bin8
let bin7
let bin6
let bin5
let bin4
let bin3
let bin2
let bin1

if(dec >= 128) {
    dec -= 128;
    bin8 = 1;
} else {
    bin8 = 0
}
if(dec >= 64)
console.log(`${bin8}`)