"use strict";



// Player 1 = X
// Player 2 = O


let gameEnd = false;
let currentPlayer = 1;

if (amtConnected == 3) {
    gameEnd = true;
}

function nextTurn() {
    let shapes = ['x', 'o'];
    let currentShape;

    if (currentPlayer == 1) {
        currentshape = 'O';
        currentPlayer++;
    } else if (currentPlayer == 2) {
        currentShape = 'X';
        currentPlayer--;
    }
}

function chooseSpot() {
    
}