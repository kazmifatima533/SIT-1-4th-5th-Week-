//Create an array called fruits that contains the strings "apple", "banana", and "cherry".
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);


//Given the array const colors = ["red", "green", "blue"], write code to access the second element in the array
const colors = ['red', 'green', 'blue'];
console.log("Second element is:", colors[1]); //index method


//Update the last element of the array const numbers = [10, 20, 30] to 40.
const number = ['10', '20', '30'];
number [2]= '40' //by index
console.log("Updated Array is:", number); // Output: ['10', '20','40']


//Use a method to add the string "grape" to the end of the array const fruits = ["apple", "banana", "cherry"].
const fruitss = ['apple', 'banana', 'cherry'];
fruitss.push('grape'); //push method to add string in the end of the array
console.log("Updated array is :", fruitss);


//Use a method to remove the last element from the array const cities = ["New York", "London", "Paris"].
const cities = ["New York", "London", "Paris"];
cities.pop() //Pop method to remove last element from the array
console.log("Updated array is:",cities)


//Use a method to add the string "mango" to the beginning of the array const fruits = ["banana", "cherry"]
const fruitsss = ["banana", "cherry"]
fruitsss.unshift('mango'); //unshift method to add string in the beginning of the array
console.log("Updated array is:", fruitsss)


//Use a method to remove the first element from the array const numbers = [100, 200, 300].
const numbers = [100, 200, 300];
numbers.shift() //shift method to remove first element from the array
console.log("Updated array:", numbers)


//Write code to find the length of the array const fruits = ["apple", "banana", "cherry", "grape"].
const fruits1 = ["apple", "banana", "cherry", "grape"];
console.log("Lenght of array is:", fruits1.length)


//Write a for loop to print each element in the array const animals = ["dog", "cat", "elephant"]
const animals = ["dog", "cat", "elephant"]
for(let i=0; i<animals.length; i++){
    console.log(`The index:${i} value is:${animals[i]}`)
}


//Write code to check if the array const colors = ["red", "green", "blue"] contains the element "yellow".
const colorss = ["red", "green", "blue"]
if (colors.includes("yellow")) { //Include method to check if yellow exists or not in the array 
  console.log("True");
} else {
  console.log("False");
}


//Use a method to reverse the order of the array const letters = ["a", "b", "c", "d"].
const letters = ["a", "b", "c", "d"];
letters.reverse(); 
console.log("Reversed array is:", letters)


//Use a method to sort the array const numbers = [30, 10, 50, 20, 40] in ascending order.
const num = [30, 10, 50, 20, 40]
num.sort() //sorts the array in ascending order
console.log("Sorted array in ascending order is:", num)


//Write code to find the index of the element "Paris" in the array const cities = ["New York", "London", "Paris", "Tokyo"].
const citi = ["New York", "London", "Paris", "Tokyo"]
const index = citi.indexOf("Paris"); //indexof returns index of specific elemet in the array
console.log("The index of 'Paris' is:", index);


//Remove the element "banana" from the array const fruits = ["apple", "banana", "cherry"]
const fruitts= ["apple", "banana", "cherry"]
fruitts.splice(1,1)
console.log(fruitts)


// Use the slice() method to create a new array containing the last two elements of the array const numbers = [10, 20, 30, 40, 50].
const numb = [10, 20, 30, 40, 50];
// Use slice to get the last two elements
const lastTwo = numb.slice(-2);
console.log("New array with last two elements:", lastTwo);


//Write code to merge the two arrays const array1 = ["a", "b"] and const array2 = ["c", "d"] into one array.
const array1 = ["a", "b"]
const array2 = ["c", "d"] 
merge = array1.concat(array2);
console.log("The merged array is:" ,merge)


//Write a function to remove duplicate elements from the array const numbers = [1, 2, 2, 3, 4, 4, 5].
const numbe = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(value, index, arr) {
  return arr.indexOf(value) === index;
}
const result = numbe.filter(removeDuplicates); //filter to remove duplicate elements

console.log("Removing duplicate elements:", result);
