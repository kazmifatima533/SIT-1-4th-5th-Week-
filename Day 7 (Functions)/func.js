//Function to convert from fahrenheit into celsius
//Function declaration
function convert(fahrenheit) { //argument
    return (fahrenheit - 32) * 5 / 9;  //formula for conversion
}
let tempInF = 98.6;
let tempInC= convert(tempInF);
console.log(tempInC);  // Output: 37


//Write a function called isEven that takes a number as an argument and returns "Even" if the number is even, 
//and "Odd" if the number is odd.
function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEven(33)); 
console.log(isEven(24));

