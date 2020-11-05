// // 1.

// let amt = 0;
// for(let i = 0; i <= 1000; i++) {
//     amt += i;
// }
// console.log(amt);


// // 2.

// let amt = 0;
// for(let i = 93; i <= 845; i += 2) {
//     amt += i;
// }
// console.log(amt);


// // 3.

// let amt = 1;
// for(let i = 1; i <= 400; i++) {
//     if(i % 6 == 0) {
//         amt = i * amt;
//     } else {
//         continue;
//     }
// }
// console.log(amt);


// // 4.

// let val = +prompt("Input a Number");
// let prime;

// for(i = 2; i < val; i++) {
//     if(val % i == 0) {
//         prime = false;
//         break;
//     } else {
//         continue;
//     }
// }

// if(prime != false) {
//     console.log('Prime');
// } else {
//     console.log('Not Prime');
// }


// // 5.

// let prime = '';
// for(let val = 1; val < 100; val++) {
//     if(val == 1) {
//         prime += '1, ';
//         continue;
//     } else if(val == 2) {
//         prime += '2, ';
//     }

//     for(i = 2; i < val; i++) {
//         if(val % i == 0) {
//             break;
//         } else {
//             prime += val + ', ';
//             break;
//         }
//     }
// }
// console.log(prime);


// // 6.

// let val = +prompt("Enter the factorial you're looking for.");
// let fac = val;
// for(let i = val - 1; i > 0; --i) {
//     fac *= i;
//     continue;
// }
// console.log(fac);


// // 7.

// let val1 = +prompt("Enter the first number");
// let val2 = +prompt("Enter the second number");
// let gcf;

// for(i = 2; i <= val1 || val2; i++) {
//     if((val1 % i == 0) && (val2 % i == 0)) {
//         gcf = i;
//     }
// }

// console.log(gcf);


// // 8.

// let val = +prompt("How big is the diamond?");
// let line = '*';

// for(let i = 0; i < val; i++) {
//     console.log(line);
//     line += '*';
// }

// for(let i = 0; i < val; i++) {
//     line = line.replace('*', '');
//     console.log(line);
// }


// // 9.

// let val = +prompt("How many lines?");
// let line = '*';

// for(let i = 0; i < val; i++) {
//     console.log(line);
//     line += '*';
// }


// // 10.

// let input = +prompt("Input a number");
// let val = 0;
// let amt = 0;

// for(let i = 1; i < input; i++) {
//     val += i;
//     amt += val;
// }
// console.log(amt);


// // 11.

// let input = 10;
// let num1 = 0;
// let num2 = 1;
// let term;

// for(let i = 1; i <= input; i++) {
//     console.log(num1);

//     term = num1 + num2;
//     num1 = num2;
//     num2 = term;
// }


// 12.

let input = 8;
let line = '';
for(let i = 0; i <= 8; i++) {
    line += ' ' + i;
}
console.log(line)