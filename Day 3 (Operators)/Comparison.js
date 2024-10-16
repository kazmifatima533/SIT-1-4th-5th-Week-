/* COMPARISONS OPERATORS */
    console.log("Examples Of COMPARISONS Operator")
    
/* Equals To Operator (==) */
    console.log("Examples Of EQUALS TO Operator")
    //Example 1:
    let v1=10;
    let v2=10;
    console.log(v1==v2); //true

    //Example 2:
    let va1=12;
    let va2=14;
    let v3=va1==va2; //equal operator
    console.log("the equal comp:",v3) //false

    //Example 3:
    const obj1 = { key: 'value' };
    const obj2 = { key: 'value' };
    console.log(obj1 == obj2); // false (different object references)

    //Example 4: 
    console.log(null == undefined); // true (both are loosely equal)



/* Strictly Equals To Operator (===) */
    console.log("Examples Of STRICTLY EQUALS TO Operator")
    //Example 1:
    x=12;
    y='12';
    z=12;
    console.log(x === z); // true
    console.log(x === y); // false (different types: number vs string)

    //Example 2:
    console.log('hello' === 'hello'); // true
    console.log('hello' === 'Hello'); // false (case-sensitive)

    //Example 3:
    console.log(true === true); // true
    console.log(true === false); // false
    console.log(false === 0); // false (different types)

    //Example 4:
    const objj1 = { key: 'value' };
    const objj2 = { key: 'value' };
    console.log(objj1 === objj2); // false (different references)

    const obj3 = obj1;
    console.log(obj1 === obj3); // true (same reference)


/* Not Equals To Operator (!=) */
    console.log("Examples Of NOT EQUALS TO Operator")
    //Example 1:
    console.log(5 != 3); // true (different values)
    console.log(5 != '5'); // false (string '5' is converted to number)

    //Example 2:
    console.log(true != 1); // false (true is loosely equal to 1)
    console.log(false != 0); // false (false is loosely equal to 0)

    //Example 3:
    console.log(null != undefined); // false (both are loosely equal)


/* STRICTLY Not Equals To Operator (!==) */
    console.log("Examples Of STRICTLY NOT EQUALS TO Operator")
    //Example 1:
    console.log(5 !== 3); // true (different values)
    console.log(5 !== 5); // false (same value)
    console.log(5 !== '5'); // true (different types)

    //Example 2:
    console.log('hello' !== 'world'); // true (different strings)
    console.log('hello' !== 'hello'); // false (same string)

    //Example 3:
    console.log(true !== false); // true (different values)
    console.log(true !== 1); // false (true is loosely equal to 1, but different types)

    //Example 4:
    console.log(null !== undefined); // true (different types)
    console.log(null !== null); // false (same value)
    console.log(undefined !== undefined); // false (same value)



/* Greater Than Operator (>) */
    console.log("Examples Of  GREATER THAN Operator")
    //Example 1:
    let a = 5;
    let b = 3;
    if (a > b) {
        console.log(`${a} is greater than ${b}`); // Output: 5 is greater than 3
    }
    
    //Example 2:
        let str1 = "apple";
    let str2 = "banana";
    if (str1 > str2) {
        console.log(`${str1} is greater than ${str2}`);
    } 

    //Example 3:
    let num = 5;
    let strNum = "3";
    if (num > strNum) {
        console.log(`${num} is greater than ${strNum}`); // Output: 5 is greater than 3
    }


/* Greater Than Equals To Operator (>=) */
    console.log("Examples Of  GREATER THAN EQUAL TO Operator")
    //Example 1:
    let a1 = 5;
    let b1 = 5;
    if (a1 >= b1) {
        console.log(`${a1} is greater than or equal to ${b1}`); // Output: 5 is greater than or equal to 5
    }

    //Example 2:
    let xx= 10;
    let yy = 8;
    if (x >= yy) {
        console.log(`${xx} is greater than or equal to ${yy}`); // Output: 10 is greater than or equal to 8
    }

    //Example 3:
    let strr1 = "apple";
    let strr2 = "apple";
    if (str1 >= str2) {
        console.log(`${strr1} is greater than or equal to ${strr2}`); // Output: apple is greater than or equal to apple
    }


/* Less Than Operator (<) */
    console.log("Examples Of  LESS THAN Operator")
    //Example 1:
    let a3 = 3;
    let b3 = 5;
    if (a < b) {
        console.log(`${a3} is less than ${b3}`); // Output: 3 is less than 5
    }

    //Example 2:
    let x5= 10;
    let y5 = 8;
    if (x5 < y5) {
        console.log(`${x5} is less than ${y5}`);
    } else {
        console.log(`${x5} is not less than ${y5}`); // Output: 10 is not less than 8
    }

    //Example 3:
    let str11 = "apple";
    let str22 = "banana";
    if (str11 < str22) {
        console.log(`${str11} is less than ${str22}`); // Output: apple is less than banana
    }

    //Example 4:
    let numm = 5;
    let strNumm = "10";
    if (numm < strNumm) {
        console.log(`${numm} is less than ${strNumm}`); // Output: 5 is less than 10
    }


/* Less Than Equals To Operator (<=) */
    console.log("Examples Of  LESS THAN Equals To Operator")
    //Example 1:
    let a6 = 4;
    let b6 = 5;
    if (a6 <= b6) {
        console.log(`${a6} is less than or equal to ${b6}`); // Output: 4 is less than or equal to 5
    }

    //Example 2:
    let x6 = 10;
    let y6= 10;
    if (x6 <= y6) {
        console.log(`${x6} is less than or equal to ${y6}`); // Output: 10 is less than or equal to 10
    }

    //Example 3:
    let p1= 15;
    let q1 = 12;
    if (p1 <= q1) {
        console.log(`${p1} is less than or equal to ${q1}`);
    }

    //Example 4:
    let stri1 = "cat";
    let stri2 = "dog";
    if (stri1 <= stri2) {
        console.log(`${stri1} is less than or equal to ${stri2}`);
    }

    //Example 5:
    let numb = 7;
    let strNumb = "9";
    if (numb <= strNumb) {
        console.log(`${numb} is less than or equal to ${strNumb}`); // Output: 7 is less than or equal to 9
    }
















    
    

