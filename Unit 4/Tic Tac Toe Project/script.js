"use strict";



// Player 1 = X
// Player 2 = O


let turn = 1;
let cells = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']; // letters: columns, rows: numbers

// Change text in cell when button is clicked
function insertShape(cell) {
    // if (turn == 1) {
    //     turn++;
    //     document.getElementById(cell).textContent = 'X';
    // } else {
    //     turn++;
    //     document.getElementById(cell).textContent = 'O';
    // }
    // console.log(`Turn: ${turn}`);
    document.getElementById(cell).textContent = 'X';
}

// function checkGameOver() {
//     if()
// }