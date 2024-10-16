// const c=50
// console.log("the result of c:",c) //error message can't rediclare const var
//c=5;
//console.log("the result of c:",c) //error message cant update a value
/* const varible is block scope and we can't update or can't redeclare 
const varible can't access out side of the block scope
it means const is local/functional scope */


//EXAMPLE 1
const c=3; 

if(true){
   const m=60  
   console.log("the result of internal m is:",m)//will give the m result

}
console.log("outer c:",c) //show reault of c
//console.log("outer m:",m) //error message m is not defined


//EXAMPLE 2: Redeclaring a const Variable
const x = 10;
// const x = 20; // Uncommenting this line will cause an error: Identifier 'x' has already been declared
console.log("Value of x:", x); // Outputs: Value of x: 10


//EXAMPLE 3: Block Scope with const
if (true) {
    const y = 42;
    console.log("Inside block, y:", y); // Outputs: Inside block, y: 42
}
// console.log("Outside block, y:", y); // Uncommenting this line will cause an error: y is not defined


//EXAMPLE 4: Attempting to Change a const Variable
const z = "Hello";
// z = "World"; // Uncommenting this line will cause an error: Assignment to constant variable
console.log("Value of z:", z); // Outputs: Value of z: Hello


//EXAMPLE 5: Using const in Different Scopes
const num = 100;
if (true) {
    const message = "Hello, World!";
    console.log("Inside block, num:", num); // Outputs: Inside block, num: 100
    console.log("Inside block, message:", message); // Outputs: Inside block, message: Hello, World!
}
// Outside the block
console.log("Outside block, num:", num); // Outputs: Outside block, num: 100
// console.log("Outside block, message:", message); // Uncommenting this line will cause an error: message is not defined




