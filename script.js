const start = document.querySelector("#start");

const btns = document.querySelectorAll(".select");

const stats = document.querySelector("#game-stats");

const score = document.querySelector("#score");

let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const num = Math.floor(Math.random() * 100);
  if (0 <= num && num <= 33) {
    return "rock";
  } else if (33 < num && num < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(human, computer) {
  stats.style.fontWeight = 400;
  stats.style.color = "black";
  stats.style.fontSize = "1rem";
  if (human === "rock" && computer === "scissors") {
    stats.textContent = "You get a point! Rock beats scissors!";
    return humanScore++;
  } else if (human === "paper" && computer === "rock") {
    stats.textContent = "You get a point! Paper beats rock!";
    return humanScore++;
  } else if (human === "scissors" && computer === "paper") {
    stats.textContent = "You get a point! Scissors beat paper!";
    return humanScore++;
  } else if (computer === "rock" && human === "scissors") {
    stats.textContent = "Computer gets a point! Rock beats scissors!";
    return computerScore++;
  } else if (computer === "paper" && human === "rock") {
    stats.textContent = "Computer gets a point! Paper beats rock!";
    return computerScore++;
  } else if (computer === "scissors" && human === "paper") {
    stats.textContent = "Computer gets a point! Scissors beat paper!";
    return computerScore++;
  } else {
    stats.textContent = "It's a draw! Try again!";
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    humanChoice = btn.id;
    playRound(humanChoice, getComputerChoice());
    score.textContent = `You: ${humanScore} vs Computer: ${computerScore}`;
    if (humanScore === 5) {
      humanScore = 0;
      computerScore = 0;
      stats.style.fontSize = "2rem";
      stats.style.fontWeight = 900;
      stats.style.color = "green";
      stats.textContent = "Congratulations! You won this match!";
    } else if (computerScore === 5) {
      humanScore = 0;
      computerScore = 0;
      stats.style.fontSize = "2rem";
      stats.style.fontWeight = 900;
      stats.style.color = "red";
      stats.textContent = "Sorry, but you lost. Better luck next time!";
    }
  });
});
