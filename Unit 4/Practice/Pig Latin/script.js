"use strict";



function translatePigLatin() {
    // let arrAlpha = ('abcdefghijklmnopqrstuvwxyz').split('');
    let input = prompt("Enter a string to convert to Pig Latin:").toLowerCase();
    let arrStr = input.split(' ');
    let strWord = [];
    let output = '';


    for(let i = 0; i < arrStr.length; i++) {
        let arrWord = arrStr[i].split('');

        // for(let letterWord = 0; letterWord < arrWord.length; letterWord++) {
        //     for(let letterAlpha = 0; letterAlpha < arrAlpha.length; letterAlpha++) {
        //         if(!(arrWord[letterWord].includes(arrAlpha[letterAlpha]))) {
        //             arrWord.splice(letterWord);
        //         }
        //     }
        // }

        if(arrWord[0] == 'a' || arrWord[0] == 'e' || arrWord[0] == 'i' || arrWord[0] == 'o' || arrWord[0] == 'u') {
            arrWord.push('y');
        } else {
            for (let n = 0; n < arrWord.length; n++) {
                if(arrWord[n] == 'a' || arrWord[n] == 'e' || arrWord[n] == 'i' || arrWord[n] == 'o' || arrWord[n] == 'u') {
                    break;
                } else {
                    arrWord.push(arrWord[n]);
                    arrWord[n] = '';
                }
            }
        }
        arrWord.push('ay ');

        arrWord = arrWord.join('');
        strWord.push(arrWord);
    }
    // Uses rules of Pig Latin to add characters to back and adds "ay " always

    for(let i = 0; i < strWord.length; i++) {
        output += strWord[i];
    }
    // Turns array into one string

    console.log(output);
}