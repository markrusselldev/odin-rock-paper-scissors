// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Don't reinvent the wheel.
// getRandomInt(3); in getComputerChoice() - expected output: 0, 1 or 2
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// Create an array holding our "Rock", "Paper", "Scissors" values
// Generate a random number between 0 and 2
// Get the array value where index equals random number
// Return computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomInt = getRandomInt(3);
  return choices[randomInt];
}

//console.log(getComputerChoice());

// Make playerSelection lowercase (computerSelection is already lowercase)
// Compare playerSelection with computerSelection
// IF

function playRound(playerSelection, computerSelection) {
  let lowercasePlayerSelection = playerSelection.toLowerCase();
  return lowercasePlayerSelection;
}

//console.log(playRound("ROCK", "scissors"));
