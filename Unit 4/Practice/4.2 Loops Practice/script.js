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


// 5.

let prime = '';
for(let val = 1; val < 100; val++) {
    if(val == 1) {
        prime += '1, ';
        continue;
    } else if(val == 2) {
        prime += '2, ';
    }

    for(i = 2; i < val; i++) {
        if(val % i == 0) {
            break;
        } else {
            prime += val + ', ';
            break;
        }
    }
}
console.log(prime);