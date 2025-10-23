let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const n = Math.random();
  return n < 1 / 3 ? "rock" : n < 2 / 3 ? "paper" : "scissor";
}

function getHumanChoice() {
  const input = prompt("Rock Paper Scissor (choose one)");
  const lowerInput = input.toLowerCase();
  return lowerInput;
}

function humanWin(humanChoice, computerChoice) {
  winner = "human";
  console.log("You Win! " + humanChoice + " beats " + computerChoice);
  humanScore++;
}

function computerWin(humanChoice, computerChoice) {
  winner = "computer";
  console.log("You Lose! " + computerChoice + " beats " + humanChoice);
  computerScore++;
}

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  const sameChoice = computerChoice === humanChoice;

  switch (sameChoice == true) {
    case true:
      winner = "none";
      console.log("Tie! both " + humanChoice);
      break;
    case false:
      if (humanChoice === "paper" && computerChoice === "rock") {
        humanWin(humanChoice, computerChoice);
      } else if (humanChoice === "rock" && computerChoice === "scissor") {
        humanWin(humanChoice, computerChoice);
      } else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanWin(humanChoice, computerChoice);
      } else {
        computerWin(humanChoice, computerChoice);
      }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log("human: " + humanScore + " computer: " + computerScore);
  }
  console.log("Final Score: " + "human: " + humanScore + " computer: " + computerScore);
}

playGame();
