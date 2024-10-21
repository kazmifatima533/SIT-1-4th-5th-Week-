//Convert a sentence to lowercase and check if it contains the word "javascript".
const sentence = "I AM  AN SOFTWARE ENGINEER AND I LIKE JAVASCRIPT";
console.log(sentence.toLowerCase());
// Check if the sentence contains the word "javascript"
const containsJavaScript = sentence.toLowerCase().includes("javascript");
console.log(containsJavaScript);  // Output: true


//Given a string, convert the first character to uppercase and the rest to lowercase.
const str = "hello WORLD";
// Convert first character to uppercase and the rest to lowercase
//charAt =gets the first character of the string
//slice = gets the substring starting from the second character onwards (index 1).
const result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(result);  // Output: "Hello world"


