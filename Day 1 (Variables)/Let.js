/* let varible is block scope and we can update but can't redeclare  
let varible can't access outside of the block scope
it means let is local/functional scope */

//EXAMPLE 1
let b=55;
b=20; // updated value of b and we wont use let to update its value because we cant redeclare it
console.log("the result of b:",b) 

//let b=66;
//console.log("the result of b:",b) //error message can't redeclare let var

if(true){
    let_c=10
    console.log("the let c is:",let_c)
}
console.log("the result of let c",let_c)


//EXAMPLE 2: Updating a let Variable
let x = 10;
x = 15; // Update the value of x
console.log("Updated value of x:", x); // Outputs: Updated value of x: 15
// let x = 20; // Uncommenting this line will cause an error: Identifier 'x' has already been declared


//EXAMPLE 3:  Block Scope with let
if (true) {
    let y = 30;
    console.log("Inside block, y:", y); // Outputs: Inside block, y: 30
}
// console.log("Outside block, y:", y); // Uncommenting this line will cause an error: y is not defined


//EXAMPLE 4: Updating a let Variable in a Loop
for (let i = 0; i < 3; i++) {
    console.log("Inside loop, i:", i); // Outputs: 0, 1, 2
}
// console.log("Outside loop, i:", i); // Uncommenting this line will cause an error: i is not defined


//EXAMPLE 5: let in Different Scopes
let a = 5;
if (true) {
    let a = 10; // This 'a' is scoped to the block
    console.log("Inside block, a:", a); // Outputs: Inside block, a: 10
}
// Outside the block
console.log("Outside block, a:", a); // Outputs: Outside block, a: 5
