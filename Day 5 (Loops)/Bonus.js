//FizzBuzz Problem.Write a for loop that prints numbers from 1 to 50. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz." in js
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Print FizzBuzz for multiples of both 3 and 5
    } else if (i % 3 === 0) {
        console.log("Fizz"); // Print Fizz for multiples of 3
    } else if (i % 5 === 0) {
        console.log("Buzz"); // Print Buzz for multiples of 5
    } else {
        console.log(i); // Print the number if it's not a multiple of 3 or 5
    }
}


//Check if a Number is Prime (divisible by only itself).Write a for loop that checks if a given number is a prime number. in js
let number = 29; // The number to check
let isPrime = true; // Assume the number is prime
if (number <= 1) {
    isPrime = false; // Numbers less than or equal to 1 are not prime
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false; // Found a divisor, so it's not prime
            break; // Exit the loop
        }
    }
}

if (isPrime) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}


