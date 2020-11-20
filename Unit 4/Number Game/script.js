"use strict";



function createNum() {
    displayNum = Math.ceil(Math.random() * 100);
    document.getElementById("display-num").textContent = displayNum;
}

let currentStreak = 0;
let bestStreak = 0;
let displayNum = Math.ceil(Math.random() * 100);
document.getElementById("display-num").textContent = displayNum;

function checkLessThan() {
    let tempVal = displayNum;
    createNum();

    if(tempVal > displayNum) {
        currentStreak++;
        document.getElementById("current-streak").textContent = 'Current Streak - ' + currentStreak;
    } else {
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            document.getElementById("best-streak").textContent = 'Best Streak - ' + bestStreak;
        }
        currentStreak = 0;
        document.getElementById("current-streak").textContent = 'Current Streak - ' + currentStreak;
    }
}

function checkGreaterThan() {
    let tempVal = displayNum;
    createNum();

    if (tempVal < displayNum) {
        currentStreak++;
        document.getElementById("current-streak").textContent = 'Current Streak - ' + currentStreak;
    } else {
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            document.getElementById("best-streak").textContent = 'Best Streak - ' + bestStreak;
        }
        currentStreak = 0;
        document.getElementById("current-streak").textContent = 'Current Streak - ' + currentStreak;
    }
}