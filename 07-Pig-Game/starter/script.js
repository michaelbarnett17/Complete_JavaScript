`use strict`

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

let score;
let currentScore;

const players = document.querySelectorAll('.player')

newButton.addEventListener(`click`, function () {
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
});

const rollDice = function () {

    let dice = Math.trunc(Math.random() * 6 + 1);
    displayDice(dice);

    if (document.querySelector('.player--active').classList.contains('player--0')) {
        if (dice !== 1) {
            currentScore = Number(current0.textContent);
            currentScore += dice;
            current0.textContent = currentScore;
        } else {
            currentScore = 0;
            document.querySelector('.player--active').classList.remove(`player--active`);
            current0.textContent = 0;
            document.querySelector('.player--1').classList.add(`player--active`);

        }
    } else if (document.querySelector('.player--active').classList.contains('player--1')) {
        if (dice !== 1) {
            currentScore = Number(current1.textContent);
            currentScore += dice;
            current1.textContent = currentScore;
        } else {
            currentScore = 0;
            document.querySelector('.player--active').classList.remove(`player--active`);
            current1.textContent = 0;
            document.querySelector('.player--0').classList.add(`player--active`);
        }
    }
}

function displayDice(diceRoll) {
    document.querySelector('.dice').setAttribute('src', `dice-${diceRoll}.png`);
}

const hold = function () {
    if (document.querySelector('.player--active').classList.contains('player--0')) {
        currentScore = Number(current0.textContent);
        score = Number(score0.textContent);
        score += currentScore;
        score0.textContent = score;
        document.querySelector('.player--active').classList.remove(`player--active`);
        document.querySelector('.player--1').classList.add(`player--active`);
        current0.textContent = 0;

    } else if (document.querySelector('.player--active').classList.contains('player--1')) {
        currentScore = Number(current1.textContent);
        score = Number(score1.textContent);
        score += currentScore;
        score1.textContent = score;
        document.querySelector('.player--active').classList.remove(`player--active`);
        document.querySelector('.player--0').classList.add(`player--active`);
        current1.textContent = 0;
    }
}

rollButton.addEventListener('click', rollDice);
holdButton.addEventListener('click', hold);

for (let i = 0; i < players.length; i++) {
    players[i].addEventListener(`click`, rollDice);
    players[i].addEventListener(`click`, hold);
}

