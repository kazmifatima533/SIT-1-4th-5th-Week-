//Function Declaration : Hoisted to the top of their scope, so you can call them before they are defined.
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(3, 5);
console.log(result);  // Output: 8


//Function Expression : Assigned to a variable.
const multiply = function(a, b) {
    return a * b;
};
let resul = multiply(5, 5);
console.log(resul);  // Output: 25


//Arrow Function (ES6):  It uses the => (arrow) syntax
hello = () => {
  return "Hello World!";
}
console.log(hello ());



