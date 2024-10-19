//guess the number game create a simple "guess the number" game using a while loop. the loop should continue until the user guesses the correct number 
// Set a fixed random number for the game
// Set a fixed number for the game
const prompt = require('prompt-sync')(); //Install then  Import prompt-sync
const randomNumber = 59; // Change this to any number you like
let userGuess = null;

console.log("Welcome to the Guess the Number Game!");
console.log("I have selected a number between 1 and 100. Can you guess what it is?");

while (userGuess !== randomNumber) {
    // Prompt the user for a guess
    userGuess = prompt("Enter your guess (between 1 and 100):"); // prompt: display a dialog box that prompts the user for input.
    
    // Convert the guess to a number
    userGuess = Number(userGuess);

    // Check if the input is a valid number
    if (isNaN(userGuess)) { //NaN: represents an invalid number 
        console.log("Please enter a valid number.");
        continue; // Restart the loop
    }

    // Provide feedback on the user's guess
    if (userGuess < randomNumber) {
        console.log("Too low! Try again.");
    } else if (userGuess > randomNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Congratulations! You guessed the correct number: " + randomNumber);
    }
}
