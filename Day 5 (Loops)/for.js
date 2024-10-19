//Print Numbers from 1 to 10.Write a for loop that prints numbers from 1 to 10.
for (let i=1; i<=10; i++){
console.log(`Numbers from 1 to 10: ${i}`)
}


//Sum of Numbers from 1 to 100.Write a for loop that calculates the sum of all numbers from 1 to 100 and prints the result.
// Initialize the sum variable
let totalSum = 0;
// Loop through numbers from 1 to 100
for (let number = 1; number <= 100; number++) {
    totalSum += number; // Add the current number to the total sum
}
// Print the result
console.log("The sum of numbers from 1 to 100 is:", totalSum);


//Print Even Numbers between 1 and 20.Write a for loop that prints only the even numbers between 1 and 20.
// Start from 2 and loop until 20, incrementing by 2
for (let number = 2; number <= 20; number += 2) {
    console.log("Even Numbers",number); // Print the even number
}


//Factorial of a Number.Write a for loop that calculates the factorial of a number (e.g., 5! = 5 × 4 × 3 × 2 × 1).
let number = 7; //number for which to calculate the factorial
let result = 1; // Initialize result
// Loop from the number down to 1
for (let i = number; i > 0; i--) {
    result *= i; // Multiply result by the current number
}
// Print the result
console.log(`The factorial of ${number} is:`, result);


//Print Multiplication Table.Write a for loop that prints the multiplication table for a given number (e.g., for 5, it should print 5 × 1 = 5, 5 × 2 = 10, etc.)
for (let i=1; i<=10; i++){
console.log(`The 6 table is: ${i} X ${6}=${i*6}`)
}



