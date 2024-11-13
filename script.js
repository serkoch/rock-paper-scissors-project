function getComputerChoice() {
    const num = Math.floor(Math.random() * 100);
    if (0 <= num && num <= 33) {
        return "rock"
    } else if (33 < num && num < 66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let inp = prompt("Let's play a game! Type: 'rock', 'paper' or 'scissors'!", "");
    let choice = "";
    if (inp.toLowerCase() === "rock" || inp.toLowerCase() === "paper" || inp.toLowerCase() === "scissors") {
        return choice.concat(inp)
    } else {
        prompt("Something's wrong! Type: Rock, paper or scissors!", "");
    }
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(human, computer) {
        if (human === "rock" && computer === "scissors") {
            console.log("You win! Rock beats scissors!");
            return humanScore++
        } else if (human === "paper" && computer === "rock") {
            console.log("You win! Paper beats rock!");
            return humanScore++
        } else if (human === "scissors" && computer === "paper") {
            console.log("You win! Scissors beat paper!");
            return humanScore++
        } else if (human === computer) {
            console.log("It's a draw!")
        } else {
            console.log("You lose! Computer wins!")
            return computerScore++
        }
    }

    let i = 0;
    while (i < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        i++;
    }

    if (humanScore > computerScore) {
        console.log("You won this match!");
    } else if (humanScore === computerScore) {
        console.log("Well. It's a draw.")
    } else {
        console.log("Sorry, but you lost to a computer.");
    }
}

playGame();

