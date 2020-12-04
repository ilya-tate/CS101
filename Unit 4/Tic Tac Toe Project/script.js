"use strict";



// Player 1 = X
// Player 2 = O
let player = 1;
let turn = 0;
let inPlay = true;
let winsPlayerOne = 0;
let winsPlayerTwo = 0;
let winningPlayer;

let cells = [document.getElementById('1'), document.getElementById('2'), document.getElementById('3'), document.getElementById('4'), document.getElementById('5'), document.getElementById('6'), document.getElementById('7'), document.getElementById('8'), document.getElementById('9'), ]; // Cells going left to right by rows



// Change text in cell when button is clicked
function insertShape(cell) {
    // Continue if game is not in play
    if (inPlay == false) {
        return;
    }

    // Places shape that is selected
    if (document.getElementById(cell).classList.contains('usedX') || document.getElementById(cell).classList.contains('usedO')) {
        return;
    } else {
        if (player == 1) {
            document.getElementById(cell).textContent = 'X';
            document.getElementById(cell).classList.add('usedX');
        } else if (player == 2) {
            document.getElementById(cell).textContent = 'O';
            document.getElementById(cell).classList.add('usedO');
        }
    }

    // Changes turn
    if (player == 1) {
        player++;
        document.getElementById('currentPlayer').textContent = 'O';
    } else if (player == 2) {
        player--;
        document.getElementById('currentTurn').textContent = 'X';
    }
    turn++;
    document.getElementById('currentTurn').textContent = turn;

    checkWin();
}

// Checks if player has won game
function checkWin() {
    // Rows
    for (let i = 0; i < cells.length; i += 3) {
        if (cells[i].classList.contains('usedX') && cells[i + 1].classList.contains('usedX') && cells[i + 2].classList.contains('usedX')) {
            winner(1);
            cells[i].classList.add('winningCell');
            cells[i + 1].classList.add('winningCell');
            cells[i + 2].classList.add('winningCell');
            return;
            } else if (cells[i].classList.contains('usedO') && cells[i + 1].classList.contains('usedO') && cells[i + 2].classList.contains('usedO')) {
                winner(2);
                cells[i].classList.add('winningCell');
                cells[i + 1].classList.add('winningCell');
                cells[i + 2].classList.add('winningCell');
                return;
        }
    }

    // Columns
    for (let i = 0; i < 3; i++) {
        if (cells[i].classList.contains('usedX') && cells[i + 3].classList.contains('usedX') && cells[i + 6].classList.contains('usedX')) {
            winner(1);
            cells[i].classList.add('winningCell');
            cells[i + 3].classList.add('winningCell');
            cells[i + 6].classList.add('winningCell');
            return;
        } else if (cells[i].classList.contains('usedO') && cells[i + 3].classList.contains('usedO') && cells[i + 6].classList.contains('usedO')) {
            winner(2);
            cells[i].classList.add('winningCell');
            cells[i + 3].classList.add('winningCell');
            cells[i + 6].classList.add('winningCell');
            return;
        }
    }

    // Diagonals X
    if (cells[0].classList.contains('usedX') && cells[4].classList.contains('usedX') && cells[8].classList.contains('usedX')) {
        winner(1);
        cells[0].classList.add('winningCell');
        cells[4].classList.add('winningCell');
        cells[8].classList.add('winningCell');
        return;
    }
    if (cells[2].classList.contains('usedX') && cells[4].classList.contains('usedX') && cells[6].classList.contains('usedX')) {
        winner(1);
        cells[2].classList.add('winningCell');
        cells[4].classList.add('winningCell');
        cells[6].classList.add('winningCell');
        return;
    }
    if (cells[2].classList.contains('usedX') && cells[4].classList.contains('usedX') && cells[6].classList.contains('usedX')) {
        winner(1);
        cells[2].classList.add('winningCell');
        cells[4].classList.add('winningCell');
        cells[6].classList.add('winningCell');
        return;
    }
    // Diagonals O
    if (cells[0].classList.contains('usedO') && cells[4].classList.contains('usedO') && cells[8].classList.contains('usedO')) {
        winner(1);
        cells[0].classList.add('winningCell');
        cells[4].classList.add('winningCell');
        cells[8].classList.add('winningCell');
        return;
    }
    if (cells[2].classList.contains('usedO') && cells[4].classList.contains('usedO') && cells[6].classList.contains('usedO')) {
        winner(1);
        cells[2].classList.add('winningCell');
        cells[4].classList.add('winningCell');
        cells[6].classList.add('winningCell');
        return;
    }
    if (cells[2].classList.contains('usedO') && cells[4].classList.contains('usedO') && cells[6].classList.contains('usedO')) {
        winner(1);
        cells[2].classList.add('winningCell');
        cells[4].classList.add('winningCell');
        cells[6].classList.add('winningCell');
        return;
    }

    // Draw
    if (turn == 9) {
        setTimeout(function () { alert("DRAW!") }, 10);
    }
}

// When a player wins, adds to counter
function winner(player) {
    inPlay = false;

    if (player == 1) {
        winsPlayerOne++;
        document.getElementById('winsPlayerOne').textContent = winsPlayerOne;
        setTimeout(function () { alert("PLAYER \"X\" WINS!") }, 10);
        return;
    } else if (player == 2) {
        winsPlayerTwo++;
        document.getElementById('winsPlayerTwo').textContent = winsPlayerTwo;
        setTimeout(function () { alert("PLAYER \"O\" WINS") }, 10);
        return;
    }
}

// Reset game button
function resetGame() {
    player = 1;
    turn = 0;
    inPlay = true;

    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('usedX');
        cells[i].classList.remove('usedO');
        cells[i].classList.remove('winningCell');
        cells[i].textContent = '';
    }

    document.getElementById('currentTurn').textContent = turn;
    document.getElementById('currentPlayer').textContent = 'X';
}