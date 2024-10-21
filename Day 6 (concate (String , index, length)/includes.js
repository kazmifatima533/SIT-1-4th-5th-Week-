//includes() – Checks if a substring is present
//Write a function that checks if a string contains the word "JavaScript".
let testString = "I am learning JavaScript right now.";

// Check if the string contains "JavaScript"
if (testString.includes("JavaScript")) {
  console.log("The string contains 'JavaScript'.");
} else {
  console.log("The string does not contain 'JavaScript'.");
}


//Create a program that checks if a sentence includes a specific word and returns true or false.
let sentence = "I am Fatima.";
let wordToCheck = "Kazmi";

// Check if the sentence includes the specific word
let result = sentence.includes(wordToCheck);

// Output the result
console.log(result);


//Given an email address, check if it includes the "@" symbol
let email = "fatima@gmail.com";

// Check if the email contains the "@" symbol
if (email.includes("@")) {
  console.log("The email contains the '@' symbol.");
} else {
  console.log("The email does not contain the '@' symbol.");
}
