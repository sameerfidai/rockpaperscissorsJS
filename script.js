const choicesBtns = document.querySelector("#choices");
const clearResultsBtn = document.querySelector("#clear");
const div = document.querySelector("#results");

let userScore = 0;
let computerScore = 0;

clearResultsBtn.addEventListener("click", () => {
    div.textContent = "";
    userScore = 0;
    computerScore = 0;
});

choicesBtns.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        playOneRound(e.target.id, getComputerChoice());
    }
});

function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playOneRound(playerSelection, computerSelection) {
    let resultText = "";
    let winner = "";

    if (playerSelection == computerSelection) {
        resultText = `Tie. Both chose ${playerSelection}`;
    } else {
        const winningConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper",
        };

        // e.g: user picks rock. wC[rock] == scissors, so player wins.
        if (computerSelection === winningConditions[playerSelection]) {
            userScore += 1;
            winner = "User";
        } else {
            computerScore += 1;
            winner = "Computer";
        }
        resultText = `${winner} wins this round.`;
    }
    resultText += ` User: ${userScore} Computer: ${computerScore}`;
    displayResult(resultText);
    checkScore();
}

function displayResult(text) {
    const result = document.createElement("h5");
    result.textContent = text;
    div.appendChild(result);
}

function checkScore() {
    if (userScore == 5 || computerScore == 5) {
        const winner = userScore == 5 ? "User" : "Computer";
        div.textContent = `${winner} Wins ${userScore} - ${computerScore}.`;
        userScore = 0;
        computerScore = 0;
    }
}
