
// Non-primitive: Stores in memory with reference
const obj = {
    name: "Fatima",
    age: 22
};
console.log(obj); // Corrected the console.log placement

// Primitive: Stores directly into memory
// 1. Number
let length = 16;
let weight = 7.5;
console.log(length + weight);

// 2. Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(lastName + " " + color); // Added space for better readability

// 3. Booleans
let x = true;
let y = false;
console.log(x);

// 4. Null
let number = null;
console.log(number);

// 5. Undefined 
let fname;
console.log(fname); // undefined

let age = "12";
age = undefined; // Assigning undefined to the age variable
console.log(age); // Returns undefined

// 6. Symbol
// Two symbols with the same description because it uniquely identifies
const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1 === value2); // false

// 7. BigInt 
let a = BigInt("9999999999999999");
console.log(a);

