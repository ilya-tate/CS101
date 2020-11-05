// let firstWord = "Banana";
// let secondWord = "bandana";

// console.log(`Banana is less than bandana ${firstWord.toLowerCase() < secondWord.toLowerCase()}`);


// console.log(`5 > 4: ${5 > 4}`);
// console.log(`"apple" > "appear": ${"apple" > "appear"}`);
// console.log(`"west" < "Went": ${"west" < "Went"}`);
// console.log(`2 > "12": ${2 > "12"}`);
// console.log(`undefined == null: ${undefined == null}`);
// console.log(`undefined === null: ${undefined === null}`);
// console.log(`null == "0": ${null == "0"}`);


// if(5 == 5) {
//     console.log(`It was equal`);
// }

// if(undefined == null) {
//     console.log(`They're both nothing`);
// }

// if(undefined === null) {
//     console.log(`Something is very wrong`);
// }


// let age = 54;
// if(age >= 18) console.log('Adult');


// let check = true;

// if(check) console.log(`It was true`);
// if("") console.log(`This is false`); // Will print nothing because false

// if("whatever") console.log(`This is true`);
// if(0) console.log(`This is falsy`);

// if(check) {
//     console.log(`It was true;`);
// } else {
//     console.log(`It was false`);
// }


// let questionFirst = prompt('True or False: null == undefined').toLowerCase();
// let questionSecond = prompt('True or False: null === undefined').toLowerCase();
// let questionThird = prompt('What is the first letter of the alphabet?').toLowerCase();
// let questionFourth = prompt('What is the last letter of the alphabet?').toLowerCase();
// let questionFifth = prompt('True or False: 0 == 0').toLowerCase();
// // Gets answers from user

// let score = 0;

// if (questionFirst == 'true') {
//     score++;
// }
// if (questionSecond == 'false') {
//     score++;
// }
// if (questionThird == 'a') {
//     score++;
// }
// if (questionFourth == 'z') {
//     score++;
// }
// if (questionFifth == 'true') {
//     score++;
// }
// // Adds one to score for every correct answer

// score = (score / 5) * 100;
// // Gets percentage score

// console.log(`You score is ${score}%`);


// if(name = "pam") {
//     console.log(`Cool`);
// } else {
//     console.log(`Not so cool`);
// }

// let coolness = (name = 'Pam') ? 'Cool' : 'Not so cool';
// console.log(`${coolness}`);


// let result = (a + b < 4) ? 'Below' : 'Over';


// switch(login) {
//     case 'Employee':
//         message = 'Hello';
//         break;
//     case 'Director':
//         message = 'Greetings';
//         break;
//     case '':
//         mesage = 'No login';
//         break;
//     default:
//         message = '';
// }


// if(shirt = 'blue' || shirt == 'red' || shirt == 'green' || shirt == 'pink') {
//     alert("Lookin' good");
// }


// let open;

// if(time <= 9 || time >= 17 || weekdays == false) {
//     open = false;
// } else {
//     open = true;
// }


// Tells you if you need to fix your car
// Flat tire, check engine light on, or if 30,0000+ miles

// let flatTire = false;
// let checkEngine = true;
// let mileage = 50321;

// if(flatTire == true || checkEngine == true || mileage >= 30000) {
//     console.log('Your car needs to be fixed');
// }


// let pen = true;
// let paper = false;
// let mouse = false;
// let keyboard = true;

// if((pen && paper) || (mouse && keyboard)) {
//     alert('You can take notes');
// } else {
//     alert('You need stuff to take notes with');
// }


// let upLate = true;
// let tooManyGames = true;
// let study = false;
// let skipBreakfast = false;

// if(wakeUpLate != false && tooManyGames != false && study == true && skipBreakfast != true) {
//     alert('You can pass the test');
// } else {
//     alert('Good luck buddy');
// }


// for(let i = 5; i <= 13; i += 2) {
//     console.log(i);
// }

// for(let i = 0; i <= 5; i++) {
//     console.log(2 * i + 5);
// }


// for(let i = 5; i <= 11; i++) {
//     console.log(i);
// }

// for(let i = 1; i <= 9; i++) {
//     console.log("This is nice");
// }

// for(let i = 11; i >= 1; i -= 2) {
//     console.log(i);
// }


// let val =`${Math.round(Math.random() * 100)}`;
// for(let i = 1; i <= 4; i++) {
//     val = `${Math.round(Math.random(i) * 100)}, ` + val;
// }
// console.log(val);


// let sum = 0;
// let amt = 0;

// while(true) {
//     let val = +prompt(`Enter a test score:`, `Leave blank if done`);
//     if(!val) break;
//     sum += val;
//     amt++;
// }

// let avg = sum / amt;
// let grade = '';

// if(avg >= 90) {
//     grade = 'A';
// } else if(avg >= 80) {
//     grade = 'B';
// } else if(avg >= 70) {
//     grade = 'C';
// } else if(avg >= 60) {
//     grade = 'D';
// } else {
//     grade = 'F';
// }

// console.log(`Sum: ${sum}`);
// console.log(`Amount: ${amt}`);
// console.log(`Average ${avg}`);
// console.log(`Grade: ${grade}`);


// main:
// for(let i = 0; i < 50; i++) {
//     if(i % 5 == 0) continue main;
//     console.log(i);
// }


// var i, j;

// loopOuter:
// for(i = 0; i < 3; i++) {
//     loopInner:
//     for(j=0; j < 3; j++) {
//         if(i == j) {
//             continue loopOuter;
//         } else {
//             console.log(`i = ${i}, j = ${j}`);
//         }
//     }
// }


// let num1 = 0,
//     num2 = 0,
//     num3 = 0,
//     num4 = 0,
//     num5 = 0,
//     num6 = 0;

// num1 = Math.floor(Math.random() * 10 + 1);
// num2 = Math.ceil(Math.random() * 10);
// while(true) {
//     if(num1 == num2) {
//         num2 = Math.ceil(Math.random() * 10);
//     } else {
//         break;
//     }
// }

// num3 = Math.ceil(Math.random() * 10);
// while(true) {
//     if(num3 == num1 || num3 == num2) {
//         num3 = Math.ceil(Math.random() * 10);
//     } else {
//         break;
//     }
// }

// num4 = Math.ceil(Math.random() * 10);
// while(true) {
//     if(num4 == num1 || num4 == num2 || num4 == num3) {
//         num4 = Math.ceil(Math.random() * 10);
//     } else {
//         break;
//     }
// }

// num5 = Math.ceil(Math.random() * 10);
// while(true) {
//     if(num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4) {
//         num5 = Math.ceil(Math.random() * 10);
//     } else {
//         break;
//     }
// }

// num6 = Math.ceil(Math.random() * 10);
// while(true) {
//     if(num6 == num1 || num6 == num2 || num6 == num3 || num6 == num4 || num6 == num5) {
//         num6 = Math.ceil(Math.random() * 10);
//     } else {
//         break;
//     }
// }

// console.log(`${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}`);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// let box1 = [1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 22, 23, 25, 27, 29];
// let box2 = [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31];
// let box3 = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31];
// let box4 = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31];
// let box5 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// input = 19;
// let containInput = [0, 0, 0, 0];

//     for(let i = 0; i < 32; i++) {
//         if(input == box1[i]) {
//             containInput[0] = 1;
//         }

//         if(input == box2[i]) {
//             containInput[1] = 1;
//         }

//         if(input == box3[i]) {
//             containInput[2] = 1;
//         }

//         if(input == box4[i]) {
//             containInput[3] = 1;
//         }

//         if(input == box5[i]) {
//             containInput[4] = 1;
//         }
//     }

// console.log(`${containInput[0]} ${containInput[1]} ${containInput[2]} ${containInput[3]} ${containInput[4]}`);


let arrMusic = ['jazz', 'blues'];

arrMusic.push('R&B');

if(arrMusic.length % 2 != 0) {
    arrMusic[Math.floor(arrMusic.length / 2)] = 'classic';
}

arrMusic.unshift('rap', 'acapella');

console.log(arrMusic);