// console.log("Hello World");
// console.log(3 + 5);
// console.log(2 + "2");
// console.log(2 - "2");


// alert("ERROR")
// alert("Critical alert from Microsoft, your computer has alerted us that it is infected with a virus and spyware this virus is sending your credit card details, Facebook login and personal emails to hackers remotely please call us immediatly at the toll-free number listed so that our support engineers can walk you through the removal process over the phone if you close this page before calling us we will be forced to disable your computer to prevent further damage to our network. Error number 2-6-8-D-3")


// //confirm();
// //a way to check yes or no from a user
// //the options a re returned as either true or false


var check = confirm("Are you a human?");

if(check == true){
    console.log("This is an actual person.");
}else{
    console.log("They're a bot. Get 'em out of here!");
}


var score = 0;
var firstAnswer = prompt("What coding language are you using right now?");
var secondAnswer = prompt("What did you answer to the question about being human?")
var thirdAnswer = prompt("Do you like coding?")
var fourthAnswer = prompt("What state was this code written in?")
var fifthAnswer = prompt("Is pineapple pizza good?")
var sixthAnswer = prompt("What is the meaning of life?")
var seventhAnswer = prompt("What's 9 + 10?")
var eigthAnswer = prompt("What is my name?")
var ninthAnswer = prompt("Is Counter Strike better than Valorant?")
var tenthAnswer = prompt("Is Fortnite a good game?")

if(firstAnswer == "JavaScript"){
    score ++;
}
if(secondAnswer == "True"){
    score ++;
}
if(thirdAnswer == "Yes"){
    score++;
}
if(fourthAnswer == "Arizona"){
    score++;
}
if(fifthAnswer == "No"){
    score++;
}
if(sixthAnswer == "42"){
    score++;
}
if(seventhAnswer == "21"){
    score++;
}
if(eigthAnswer == "Jeff"){
    score++;
}
if(ninthAnswer == "Yes"){
    score++;
}
if(tenthAnswer == "Absolutely Not!"){
    score++;
}

console.log(score);