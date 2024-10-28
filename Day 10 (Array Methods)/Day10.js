//Add Function
const arr=[1,3,1,1];
const add=function(array){
     let y=0;
     for(let i=0;i<arr.length;i++){
       y=y+array[i]
     }
     return y
 }
 console.log("the result is:",add(arr))



//Reducer mathod same the above with reducer
const result=arr.reduce((a,b)=>a+b,10)
console.log("the result is:",result)


//Find Method to test if some specific value is present or not, if yes return the first existance of element value other wise return undefind
// Returns the value of the first element that satisfies the provided testing function. Otherwise, it returns undefined.
const results=arr.find(a=>a%2===0)
console.log("the result of th find method is:",results)


//Some method check if the value is present give me the true other wise fase
 const numbers = [1, 3, 5, 7, 8];
 const hasEvenNumber = numbers.some(num => num % 2 === 0);
 console.log(hasEvenNumber); // Output: true


//Every check each item of the array if all the element are true the result will be true otherwise false
const numbers1 = [2, 4, 5];
const areAllEven = numbers1.every(num => num % 2 === 0);
console.log(areAllEven); // Output: true


//Join Method : Combine all elements of an array into a single string.
const fruits = ['apple', 'banana', 'mango',5];
const fruitString = fruits.join(', ');
console.log(fruitString); // Output: 'apple, banana, mango'


//Include Method : array (or a string) contains a specified value and returns a boolean (true or false) accordingly.
const result1=fruits.includes("banana")
console.log(result1)


//Nested Array and index
const nu=[1,2,3,4,[1,2,3,4,5,[4,4]],16]
console.log(nu[4][5][0])
