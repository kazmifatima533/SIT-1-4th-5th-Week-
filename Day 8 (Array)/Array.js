// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
//very dificult to find some specific ones so the fixed by array

//Array initialization
function array() {
    const names = ['Fatima', 'Kazmi', '22', '2002'];
    return names;
}
let names = array();
console.log("The array is:" ,names); 

// Update the value at index 0
names[0] = "Shah"; 
console.log("The updated array is :",names); 

// dynamic size = lenght of the array
console.log("the array dynamic size:",names)
console.log("the array length and dynamic size is:",names.length)

//find the index position 
console.log(names[2])

//Push = add something in the end of array
names.push("FUSST")
console.log("the updated array is:",names)

//pop() to remove element from the end of array
names.pop()
console.log("Remove Elemnet from the end of an array:",names)

//unshift() used to add element at the atart of an array
names.unshift("Engineering")
console.log("the updated array after unshift:", names)

//shift to remove elemet from the start of an array
names.shift()
console.log("updated array after removing element from the start:",names)

//Concat
const names2=["Hello","its", "me"]
console.log("the array 2 is:",names2)
const names3=names.concat(names2)
console.log("the result after adding two array:",names3)

//Sort
const sort1=[9,8,7,6,5,4,2,3,1]
console.log(sort1.sort())  // to sort numbers


const sort2=['Banana','Apple', 'kiwi', 'Carrot']
console.log(sort2.sort())  // to sort numbers


//Reverse sort
console.log("reverse array:",sort1.reverse()) //to reverse complete array


//Splice
names.splice(1,1)
console.log(names)


//Prints seperately what is in each index by iterting 
for(let i=0; i<names.length; i++){
    console.log(`The index:${i} value is:${names[i]}`)
}

//for----of loop. itereate over the element not on the index
  for( let i of names){
    console.log("the element is:",i)
}

//for in: loop is used to itereate over the index position
 for (let index in names){
     console.log(index, names[index])
}


//for of : loops through the values of an iterable object.
for (let values of names) {
names += values;
console.log (names)
}


