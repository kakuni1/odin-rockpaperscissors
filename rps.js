function getComputerChoice() {
  const n = Math.random();
  return n < 1 / 3 ? "rock" : n < 2 / 3 ? "paper" : "scissor";
}

function getHumanChoice() {
  const input = prompt("Rock Paper Scissors (choose one)");
  let lowerInput = input.toLowerCase();
  return lowerInput;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
