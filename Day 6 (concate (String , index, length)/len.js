//length – Returns the length of a string 
const a = "Syeda Fatima Kazmi"
console.log(a.length)


///find the length of the string  "                                         ok"  and then remove the starting extra space.
const b = "                                         ok"
console.log(b.length) // length of b
console.log(b.trim()) // trim (removes starting and ending extra space)


//Create a program that checks if the length of a string is greater than 10 characters.
const program = "I am a BSIT Student From Foundation University and I am in 7th Semester"
if (a.length > 10) {
    console.log("length of the string is greater then 10 characters, it is : " + a.length)
} else {
    console.log("length of the string is less then 10 characters, it is : " + a.length)
}


//Given a sentence, find the length of the longest word in the sentence.
const sentence = "The uncharacteristically large tree towered over the forest"
// Split the sentence into words with spaces
let words = sentence.split(' ');

// Find the longest word length
let longestWordLength = 0;

for (let i = 0; i < words.length; i++) {
    // Update the longest word length if the current word is longer
    if (words[i].length > longestWordLength) {
        longestWordLength = words[i].length;
    }
}
// Output the result
console.log("The longest word length:" , longestWordLength); // Output: 6
