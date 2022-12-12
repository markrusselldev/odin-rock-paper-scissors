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

// Capitalize first letter of string from fundamentals-part3-functions
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

// Make playerSelection lowercase (computerSelection is already lowercase)
// Compare player selection and computer selection
// If player selection and computer selection match, return tie message
// Switch through computer selection and compare to player selection
// If player selection wins, return win message
// If computer selection wins, return lose message
function playRound(playerSelection, computerSelection) {
  let cleanPlayerSelection = playerSelection.toLowerCase().trim();
  if (cleanPlayerSelection === computerSelection) return `It's a tie. The computer also chose ${cleanPlayerSelection}.`;
  switch (computerSelection) {
    case "rock":
      if (cleanPlayerSelection === "paper") return `You win! ${capitalize(cleanPlayerSelection)} beats ${computerSelection}.`;
      if (cleanPlayerSelection === "scissors") return `You lose. ${capitalize(computerSelection)} beats ${cleanPlayerSelection}.`;
      break;
    case "paper":
      if (cleanPlayerSelection === "scissors") return `You win! ${capitalize(cleanPlayerSelection)} beats ${computerSelection}.`;
      if (cleanPlayerSelection === "rock") return `You lose. ${capitalize(computerSelection)} beats ${cleanPlayerSelection}.`;
      break;
    case "scissors":
      if (cleanPlayerSelection === "rock") return `You win! ${capitalize(cleanPlayerSelection)} beats ${computerSelection}.`;
      if (cleanPlayerSelection === "paper") return `You lose. ${capitalize(computerSelection)} beats ${cleanPlayerSelection}`;
      break;
    default:
      console.error(`Something went wrong with the playRound() function. \n cleanPlayerSelection: ${cleanPlayerSelection} \n computerSelection: ${computerSelection} \n playerSelection: ${playerSelection}`);
      return;
  }
}

//const playerSelection = " RoCK ";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function chooseWinner(user, computer) {
  if (user === computer) return "It's a tie after five rounds! Damn those ties.";
  if (user > computer) return "You";
  if (user < computer) return "Computer";
}

let userScore = 0;
let computerScore = 0;
let tieScore = 0;
let winner = "";
// Loop five times and each time call playRound()
// Keep score
// Report winner or loser at end
function game() {
  let playerSelection = prompt("Enter Rock, Paper or Scissors");
  let results = [];
  for (let i = 0; i < 5; i++) {
    let result = playRound(playerSelection, getComputerChoice());
    if (result.includes("win")) userScore++;
    if (result.includes("lose")) computerScore++;
    if (result.includes("tie")) tieScore++;
    results.push(result);
  }
  winner = chooseWinner(userScore, computerScore);
  return results;
}

let play = game();
console.log(play);
console.log(`Score - You: ${userScore} Computer: ${computerScore} Tie: ${tieScore} \n Winner: ${winner} `);

alert(`${play.map((line, index) => `${index + 1}. ${line}`).join("\r\n")} \n Score - You: ${userScore} Computer: ${computerScore} Tie: ${tieScore} \n Winner: ${winner}`);
