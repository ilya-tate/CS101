let questionFirst = prompt('True or False: null == undefined').toLowerCase();
let questionSecond = prompt('True or False: null === undefined').toLowerCase();
let questionThird = prompt('What is the first letter of the alphabet?').toLowerCase();
let questionFourth = prompt('What is the last letter of the alphabet?').toLowerCase();
let questionFifth = prompt('True or False: 0 == 0').toLowerCase();
// Gets answers from user

let score = 0;

if (questionFirst == 'true') {
    score++;
}
if (questionSecond == 'false') {
    score++;
}
if (questionThird == 'a') {
    score++;
}
if (questionFourth == 'z') {
    score++;
}
if (questionFifth == 'true') {
    score++;
}
// Adds one to score for every correct answer

score = (score / 5) * 100;
// Gets percentage score

console.log(`You score is ${score}%`);