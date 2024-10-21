//replace() – Replaces a substring with another
//Create a program that replaces spaces with underscores in a sentence.
let sentence = "This is a sentence with spaces.";

// Replace spaces with underscores
//  / /: Matches a single space.
//g: The global flag, which tells replace() to replace all occurrences, not just the first one.

let updatedSentence = sentence.replace(/ /g, "_");

// Output the updated sentence
console.log(updatedSentence);


//Replace the first occurrence of a given character in a string with another character.
let sentences = "I love JavaScript, JavaScript is great!";

// Character to replace
let charToReplace = "J";
let replacementChar = "j";

// Replace the first occurrence of 'J' with 'j'
let updatedSentences = sentences.replace(charToReplace, replacementChar);

// Output the updated sentence
console.log(updatedSentences);
