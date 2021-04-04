'use strict';
//selecting all the elements
let dice = document.querySelector('.dice');
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const player0 = document.querySelector('player--0');
const player1 = document.querySelector('player--1');
// defining variable
score1.textContent = 0;
score2.textContent = 0;
let currentScore = 0;
let currentPlayer = 0;
let playing = true;
dice.classList.add('hidden');
//switch player
const switchPlayer = function () {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--active');
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--active');
};
//const btns = document.querySelector();
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    const d = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${d}.png`;
    if (d === 1) {
      currentScore = 0;
      document.getElementById(
        `current--${currentPlayer}`
      ).textContent = currentScore;
      switchPlayer();
    } else {
      currentScore += d;
      document.getElementById(
        `current--${currentPlayer}`
      ).textContent = currentScore;
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    let score = Number(
      document.getElementById(`score--${currentPlayer}`).textContent
    );
    score += currentScore;
    currentScore = 0;
    document.getElementById(
      `current--${currentPlayer}`
    ).textContent = currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent = score;
    if (score >= 100) {
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      dice.classList.add('hidden');
      playing = false;
    } else switchPlayer();
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  playing = true;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner');
  dice.classList.remove('hidden');
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore = 0;
  currentPlayer = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
});
