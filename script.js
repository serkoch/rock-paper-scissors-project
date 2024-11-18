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
  if (human === "rock" && computer === "scissors") {
    console.log("You win! Rock beats scissors!");
    stats.textContent = "You win! Rock beats scissors!";
    return humanScore++;
  } else if (human === "paper" && computer === "rock") {
    console.log("You win! Paper beats rock!");
    stats.textContent = "You win! Paper beats rock!";
    return humanScore++;
  } else if (human === "scissors" && computer === "paper") {
    console.log("You win! Scissors beat paper!");
    stats.textContent = "You win! Scissors beat paper!";
    return humanScore++;
  } else if (computer === "rock" && human === "scissors") {
    console.log("Computer wins! Rock beats scissors!");
    stats.textContent = "Computer wins! Rock beats scissors!";
    return computerScore++;
  } else if (computer === "paper" && human === "rock") {
    console.log("Computer wins! Paper beats rock!");
    stats.textContent = "Computer wins! Paper beats rock!";
    return computerScore++;
  } else if (computer === "scissors" && human === "paper") {
    console.log("Computer wins! Scissors beat paper!");
    stats.textContent = "Computer wins! Scissors beat paper!";
    return computerScore++;
  } else {
    console.log("It's a draw! Try again!");
    stats.textContent = "It's a draw! Try again!";
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    humanChoice = btn.id;
    playRound(humanChoice, getComputerChoice());
    score.textContent = `You: ${humanScore} vs Computer: ${computerScore}`;
    if (humanScore === 5) {
      console.log("You won this match!");
      humanScore = 0;
      computerScore = 0;
      stats.textContent = "You won this match!";
    } else if (computerScore === 5) {
      console.log("Sorry, but you lost to a computer.");
      humanScore = 0;
      computerScore = 0;
      stats.textContent = "Sorry, but you lost to a computer.";
    }
  });
});
