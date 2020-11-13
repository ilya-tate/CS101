"use strict";


function createPigLatin() {
    let input = "Pig space bar";
    let arrStr = input.split(' ');
    let output = [];

    for(let i = 0; i < arr.length; i++) {
        let arrWord = arrStr[i].split('');

        if (arrWord[0] == 'a' || arrWord[0] == 'e' || arrWord[0] == 'i' || arrWord[0] == 'o' || arrWord[0] == 'u') {
            arrWord.push('w');
        } else if ((arrWord[0] != 'a' || arrWord[0] != 'e' || arrWord[0] != 'i' || arrWord[0] != 'o' || arrWord[0] != 'u') && (arrWord[1] != 'a' || arrWord[1] != 'e' || arrWord[1] != 'i' || arrWord[1] != 'o' || arrWord[1] != 'u')) {
            let arrEnd = arrWord.splice(0, 2);
            arrWord = arrWord.concat(arrEnd);
        } else if ((arrWord[0] != 'a' || arrWord[0] != 'e' || arrWord[0] != 'i' || arrWord[0] != 'o' || arrWord[0] != 'u') && (arrWord[1] == 'a' || arrWord[1] == 'e' || arrWord[1] == 'i' || arrWord[1] == 'o' || arrWord[1] == 'u')) {
            arrWord.push(arrWord[0]);
            arrWord.shift;
        } else {
            console.log("Idk something went wrong pls help me")
        }
        arrWord.push('ay');

        output = output.concat(arrWord);
    }

    console.log(output)
}