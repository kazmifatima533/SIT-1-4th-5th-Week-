/* TERNARY CONDITIONAL STATEMENT */
    console.log("Examples Of  TERNARY OPERATOR");
//condition ? valueIfTrue : valueIfFalse;
// Ternary Operator
// condition ? "something":"something else"

//Example 1:
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

//Example 2:
let marks= 80;
let Result= (marks >= 50) ? "Success" : "Failed";
console.log(Result);

//Example 3:
let isLoggedIn = false;
let greeting = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(greeting); // Output: "Please log in."

//Example 4:
let name = "Syeda Fatima";
let username = name? "Syeda Fatima" : "Wrong UserName"
console.log(username); 

//Example 5:
let number = -3;
let result = (number >= 0) ? "Positive" : "Negative";
console.log(result); // Output: "Negative"

