//Print Numbers from 1 to 10.Write a while loop that prints numbers from 1 to 10.
const prompt = require('prompt-sync')(); //Install then  Import prompt-sync
let i=1; 
while(i<=10){
  console.log(`Numbers from 1 to 10: ${i}`)
    i++;
}


//Sum of Digits of a Number.Write a while loop that calculates the sum of digits of a given number (e.g., for 123, the sum is 1 + 2 + 3 = 6).
let number = 259;
let sum = 0;
// Convert to string to iterate through digits
number = number.toString();
let it = 0; // Index for the loop
while (it < number.length) {
    // Add the numeric value of each digit to sum
    sum += +number[it]; // Using unary plus to convert to number
    it++; // Move to the next digit
}
console.log(`The sum of digits is ${sum}.`); // Output: 2


//Print Powers of 2.Write a while loop that prints the powers of 2 up to a certain limit (e.g., 2, 4, 8, 16, 32...).
const limit = 100; // Set the limit for the powers of 2 
let powerOf2 = 1; // Start with 2^0
// Print the powers of 2 using a while loop
while (powerOf2 <= limit) {
    console.log(powerOf2); // Print the current power of 2
    powerOf2 *= 2; // Move to the next power of 2
}


//Reverse a Number.Write a while loop that reverses a given number (e.g., for 1234, the reverse is 4321).
// Prompt the user to enter a number and store it as a string
let numbers = prompt("Enter a number: ");

// Initialize an empty string to hold the reversed number
let reversedNumber = "";

// Set the index to the last character of the string
let index = numbers.length - 1;

// Use a while loop to iterate backwards through the string
while (index >= 0) {
    // Add the current character at index to the reversedNumber string
    reversedNumber += numbers[index];
    
    // Decrement the index to move to the previous character
    index--;
}

// Output the reversed number to the console
console.log("Reversed number:", reversedNumber);


