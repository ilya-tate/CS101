let inputNum = Number(prompt("What is your number?"));
// Grabs input number from user


let inputType = typeof(inputNum);
// Gets data type of input


let inputSign;

if(inputNum > 0) {
    inputSign = "positive";
} else {
    if(inputNum < 0) {
        inputSign = "negative";
    } else {
        inputSign = 0;
    }
}
// Checks if input is positive, negative, or 0


let inputMult = 5 * inputNum;
// Same as (4 * inputNum + inputNum), or 4 times more the number


console.log(`Data Type of Number: ${inputType}\n
Sign of Number (0 if number is 0): ${inputSign}\n
Four Times More Than the Number: ${inputMult}`);