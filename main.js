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

// Choose a winner based on the scores
function chooseWinner(user, computer) {
  if (user === computer) return "This shouldn't be possible now.";
  if (user > computer) return "You won the game! <br/>Shoot to play again.";
  if (user < computer) return "The computer won this game. <br/>Shoot to play again.";
}

let userScore = 0;
let computerScore = 0;
let tieScore = 0;
let winner = "";

const pWinner = document.querySelector("#winner");

// Reset the game
function reset() {
  userScore = 0;
  computerScore = 0;
  tieScore = 0;
  winner = "";
  pWinner.textContent = "";
}

// Add "click" event listener to each button
const buttons = document.querySelectorAll("#buttons button");

// we use the .forEach method to iterate through each button
buttons.forEach(button => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (userScore === 5 || computerScore === 5) reset();

    let round = playRound(button.id, getComputerChoice());
    if (round.includes("win")) userScore++;
    if (round.includes("lose")) computerScore++;
    if (round.includes("tie")) tieScore++;

    const pResult = document.querySelector("#result");
    pResult.textContent = round;
    const pScore = document.querySelector("#score");
    pScore.innerHTML = `You: ${userScore} &bull; Computer: ${computerScore} &bull; Tie: ${tieScore}`;

    if (userScore === 5 || computerScore === 5) {
      winner = chooseWinner(userScore, computerScore);
      pWinner.innerHTML = winner;
      // add a button to play again
    }
  });
});
