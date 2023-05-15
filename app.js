const newGame = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player1 = document.querySelector(".player--0");
const player1Score = document.getElementById("score--0");
const player1CurrentScore = document.getElementById("current--0");
const player2 = document.querySelector(".player--1");
const player2Score = document.getElementById("score--1");
const player2CurrentScore = document.getElementById("current--1");
const diceImg = document.querySelector(".dice");
let currentScore = 0;
let player1TotalScore = 0;
let player2TotalScore = 0;

newGame.addEventListener("click", () => {
  diceImg.src = `dice-5.png`;
  player1TotalScore = 0;
  player2TotalScore = 0;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  diceImg.classList.remove("hidden");
});

btnRoll.addEventListener("click", () => {
  let randomDice = Math.floor(Math.random() * 6) + 1;
  console.log(randomDice);
  diceImg.src = `dice-${randomDice}.png`;
  if (randomDice !== 1) {
    currentScore += randomDice;
    console.log(currentScore);
    if (player1.classList.contains("player--active")) {
      player1CurrentScore.textContent = currentScore;
    } else {
      player2CurrentScore.textContent = currentScore;
    }
  } else {
    player1CurrentScore.textContent = 0;
    player2CurrentScore.textContent = 0;
    currentScore = 0;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
  }
});

btnHold.addEventListener("click", () => {
  if (player1.classList.contains("player--active")) {
    player1TotalScore += currentScore;
    player1Score.textContent = player1TotalScore;
  } else {
    player2TotalScore += currentScore;
    player2Score.textContent = player2TotalScore;
  }
  if (player1TotalScore >= 100) {
    diceImg.classList.add("hidden");
    player1.classList.add("player--winner");
    btnHold.disabled = "true";
    btnRoll.disabled = "true";
  } else if (player2TotalScore >= 100) {
    diceImg.classList.add("hidden");
    player2.classList.add("player--winner");
    btnHold.disabled = "true";
    btnRoll.disabled = "true";
  }
  console.log(player1TotalScore, player2TotalScore);
  currentScore = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
});
