function getComputerChoice() {
  const n = Math.random();
  return n < 1 / 3 ? "rock" : n < 2 / 3 ? "paper" : "scissor";
}

console.log(getComputerChoice());
