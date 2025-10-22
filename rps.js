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

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  const sameChoice = computerChoice === humanChoice;

  switch (sameChoice == true) {
    case true:
      console.log(humanChoice + " & " + computerChoice + ". Tied!");
      break;
    case false:
      humanChoice === "paper" && computerChoice === "rock"
        ? console.log(humanChoice + " beats " + computerChoice + "! You win!")
        : humanChoice === "paper" && computerChoice === "scissor"
          ? console.log(computerChoice + " beats " + humanChoice + "! You lose!")
          : humanChoice === "rock" && computerChoice === "scissor"
            ? console.log(humanChoice + " beats " + computerChoice + "! You win!")
            : humanChoice === "rock" && computerChoice === "paper"
              ? console.log(computerChoice + " beats " + humanChoice + "! You lose!")
              : humanChoice === "scissor" && computerChoice === "paper"
                ? console.log(humanChoice + " beats " + computerChoice + "! You win!")
                : console.log(computerChoice + " beats " + humanChoice + "! You lose!");
      break;
  }
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());
playRound();
