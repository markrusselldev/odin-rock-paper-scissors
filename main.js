// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Don't reinvent the wheel.
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// Create an array holding our "Rock", "Paper", "Scissors" values
// Generate a random number between 0 and 2
// Get the array value where index equals random number
// Return computer choice
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomInt = getRandomInt(3); // expected output: 0, 1 or 2
  return choices[randomInt];
}

console.log(getComputerChoice());
