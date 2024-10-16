// Example without using variables
x = 20;
y = 30;
console.log("Result:" ,x+y);

//Using Var variable for improved code readability (Can be updated and redeclared)
var x = 20;
var y = 30;
console.log("Result with var:" , x+y);

//Updated Value of y
y=10; 
console.log("updated value of y:",y);

//Updated Value of y
var x=34; 
console.log("updated value of x:",x);
console.log("updated result:",x+y);

//works separately because it a block
if(true){
    var a=10;
}
console.log("the var a is:",a)
// this will give me the result of the a which is 10 this is becuse the var is global scope
// and we can access from any where
// var variable can be redeclared or updated

