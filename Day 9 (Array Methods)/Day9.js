//Simple Multiply function
const a=[1,2,3,4,5,6,8,9,10];
 function mult(array){
     const arr=[]
       for(let i=0; i<array.length; i++){
          arr.push(array[i]*2)
      }
      return arr
 }
console.log("the result array:",mult(a))


//  repeat the above with the map method
const result =a.map(x=>x*2) //the arrow function is executed, which multiplies x (each element) by 2.
console.log("the map mathod result:",result)


//Normal function to find even numbers
 function isEven(array){
   const arr=[]
      for(let i=0; i<array.length; i++){
        if(array[i]%2==0){
             arr.push(array[i])
}
          
      }
       return arr
 }
 console.log("the result array:",isEven(a))


//The same with filter mathod
const issEven=a.filter(y=>y%2==0) //For each element y, the arrow function y => y % 2 == 0 is executed.
console.log(issEven)


//Simple function for multipliccation
 function multi(array){
     for(let i=0; i<array.length; i++){
       console.log(array[i]*2)     
      } 
 }
 console.log("the result array:",)
multi(a)


//By Foreach method
//For each element z, the arrow function z => console.log(z * 2) is executed, which logs the value of z multiplied by 2 to the console.
const fore1=a.forEach(z=>console.log(z*2)) 
 console.log(fore1)


// slice    the slice method doesnot disturb the original array 
const fruits = ['apple', 'banana', 'mango', 'orange']
const result1=fruits.slice(0,3)
console.log("the original array:",fruits)
console.log("the new array:",result1)

const fruits1 = ['apple', 'banana', 'mango', 'orange']
//the splice method disturb the original array and give us a shallow copy of the original array.
const result2=fruits1.splice(0,1,"kochbe")
console.log("the original array of fruits1 is:",fruits1)
console.log("the updated array of fruits1 is:",result2)