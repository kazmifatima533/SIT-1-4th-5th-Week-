//indexOf() – Finds the first occurrence of a substring
//Create a program that checks if a certain word exists in a string using indexOf().
// Example string and word to search
let sentence = "Hello, welcome to the world of JavaScript!";
let wordToFind = "JavaScript";

// Check if the word exists in the string using indexOf()
if (sentence.indexOf(wordToFind) !== -1) {
  console.log("The word exists in the string.");
} else {
  console.log("The word does not exist in the string.");
}

//Given a string and a character, find the index of the first occurrence of that character.
// Given string and character
let sent = "Hello, welcome to the world of JavaScript!";
let charToFind = 'o';
// Find the index of the first occurrence of the character
let index = sent.indexOf(charToFind);

// Output the result
if (index !== -1) {
  console.log(`The first occurrence of '${charToFind}' is at index: ${index}`);
} else {
  console.log(`The character '${charToFind}' was not found in the string.`);
}
