//Given an array of numbers, return a new array where each number is doubled.
const arr= [1, 2, 3, 4];
const double =  arr.map(x=>x * 2)
console.log("the map method result:",double)

//Given an array of objects representing products with name and price, return an array containing only the names of the products. 
//Input: [{name: 'Apple', price: 100}, {name: 'Banana', price: 50}, {name: 'Cherry', price: 75}]
const products = [{name: 'Apple', price: 100}, {name: 'Banana', price: 50}, {name: 'Cherry', price: 75}];
const productname = products.map (x => x.name);
console.log("the name of the products are:",productname);


//Given an array of numbers, return a new array containing only the even numbers.
const nos = [1, 2, 3, 4,10,8,15];
const even = nos.filter(y=>y%2==0)
console.log("Even numbers are:",even)

//Given an array of objects representing people with name and age, return an array of people who are above 18 years old.
const obj = [{name: 'John', age: 16}, {name: 'Jane', age: 22}, {name: 'Tom', age: 18}]
const people = obj.filter(x => x.age>18);
console.log("Above 18 are:",people)


//Given an array of numbers, print each number to the console.
const num = [1, 2, 3, 4];
num.forEach(x => console.log(x));

//Given an array of strings, append the string '!' to each element and log the result.
const word = ['Hello', 'World'];
word.forEach((y, index, arr) => {
    arr[index] = y + '!'; // Append '!' to each string in the original array
});
word.forEach(y => console.log(y)); // Log the modified strings


//Given an array of numbers, return a new array with the first 3 elements.
const numarr =[1, 2, 3, 4, 5];
const elements= numarr.slice(0, 3);  
console.log(elements);

//Given an array of strings, return a new array with elements from index 2 to 4 (inclusive of index 2, exclusive of index 4).
const str= ['a', 'b', 'c', 'd', 'e']
const newarr = str.slice(2,4);
console.log(newarr);


//Given an array of numbers, remove the second and third elements from the array and return the modified array.
const numb = [1, 2, 3, 4, 5];
numb.splice(1, 2); // Starting at index 1, remove 2 elements
console.log(numb); // Logs the modified array

//Given an array of strings, replace the first two elements with new strings 'x' and 'y' and return the modified array.
const alpha= ['a', 'b', 'c', 'd']
alpha.splice(0, 2, 'x', 'y'); // Starting at index 0, remove 2 elements and add 'x' and 'y'
console.log(alpha);
