'use strict';

// document.querySelector('.message').textContent = "🎉Correct Number!";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23; 

// console.log(document.querySelector('.guess').value); 

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector('.score').textContent);
let highScore = document.querySelector('.highscore').textContent;
console.log(secretNumber); 

const displayMessage = function(message) {
    document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`, function () {

    if (score > 1) {
        let guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            displayMessage(`You didn't enter a guess.`);

        } else if (guess === secretNumber) {
            displayMessage(`You are correct.`);
            document.querySelector(`body`).style.backgroundColor = '#60b347';
            document.querySelector(`.number`).style.width = '400px'
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
            document.querySelector('.number').textContent = secretNumber;

        } else if (guess != secretNumber) {
            displayMessage(`You guessed too ${guess > secretNumber ? "too high" : "too low"}!`);
            score--;
            document.querySelector(`.score`).textContent = score
        }
    } else {
        document.querySelector(`.score`).textContent = 0;
        displayMessage(`You guessed too ${guess > secretNumber ? "too high" : "too low"}!`)
    }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 20;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`body`).style.backgroundColor = '#222';
    document.querySelector(`.number`).style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = "?";
    console.log(secretNumber);
});