function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playOneRound(playerSelection, computerSelection) {
    console.log(`You chose ${playerSelection}, the computer chose ${computerSelection}`);

    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                console.log("Tie. Both chose rock.");
            } else if (computerSelection == "paper") {
                console.log("You lose. Paper beats rock.");
            } else {
                console.log("You win. Rock beats scissors.");
            }
            break;

        case "paper":
            if (computerSelection == "paper") {
                console.log("Tie. Both chose paper.");
            } else if (computerSelection == "rock") {
                console.log("You Win. Paper beats rock.");
            } else {
                console.log("You lose. Scissors beats paper.");
            }
            break;

        case "scissors":
            if (computerSelection == "scissors") {
                console.log("Tie. Both chose scissors.");
            } else if (computerSelection == "paper") {
                console.log("You win. Scissors beats paper.");
            } else {
                console.log("You lose. Rock beats scissors.");
            }
            break;

        default:
            console.log("Please choose eithe rock, paper, or scissors. (CHECK SPELLING)");
            break;
    }
}

function playGame(numRounds) {
    for (let i = 0; i < numRounds; i++) {
        const playerSelection = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
        const computerSelection = getComputerChoice();
        playOneRound(playerSelection, computerSelection);
    }
}

playGame(5);
