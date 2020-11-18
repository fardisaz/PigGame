'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
//if you want to select an element only by ids you can do as following
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1.Generate a random dice rolll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2.Display dice
  diceEl.classList.remove('hidden');
  //you can access html element's attribute like bellow
  diceEl.src = `dice-${dice}.png`;
  //3.Check fo rolled 1:if true, switch to next player
  if (dice !== 1) {
    //Add dice to the current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //Switch to the next player
    currentScore = 0;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //you can use toggle method in classList
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
