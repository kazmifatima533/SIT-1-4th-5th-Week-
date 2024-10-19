//Print Numbers from 1 to 10.Write a Do While loop that prints numbers from 1 to 10.
let number = 1; // Start from 1
do {
    console.log(number); // Print the current number
    number++; // Increment the number
} while (number <= 10); // Continue until number is 10


////Sum of Numbers from 1 to 100.Write a do while loop that calculates the sum of all numbers from 1 to 100 and prints the result.
let sum = 0; // Initialize sum
let num = 1; // Start from 1
do {
    sum += num; // Add the current number to sum
    num++; // Increment the number
} while (num <= 100); // Continue until number is 100

console.log(sum); // Print the result


//Print Even Numbers between 1 and 20.Write a do while loop that prints only the even numbers between 1 and 20.
let numb = 2; // Start from the first even number
do {
    console.log(numb); // Print the current even number
    numb += 2; // Increment by 2 to get the next even number
} while (numb <= 20); // Continue until number is 20


////Factorial of a Number.Write a do while loop that calculates the factorial of a number (e.g., 5! = 5 × 4 × 3 × 2 × 1).
let nums = 5; // The number to calculate the factorial of
let factorial = 1; // Initialize factorial
do {
    factorial *= nums; // Multiply the current number to the factorial
    nums--; // Decrement the number
} while (nums > 0); // Continue until number is greater than 0

console.log(factorial); // Print the result


//Print Multiplication Table.Write a do while loop that prints the multiplication table for a given number (e.g., for 5, it should print 5 × 1 = 5, 5 × 2 = 10, etc.)
let number1 = 9; // The number for which to print the multiplication table
let i = 1; // Start from 1

do {
    console.log(`${number1} × ${i} = ${number1 * i}`); // Print the multiplication result
    i++; // Increment i
} while (i <= 10); // Continue until i is 10
