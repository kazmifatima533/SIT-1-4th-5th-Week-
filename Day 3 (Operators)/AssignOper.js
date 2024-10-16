/* ASSIGNMENT OPERATORS (=) */
    console.log("Examples Of ASSIGNMENT Operator")
    // Example 1:
    let a=5;
    console.log("the a value is:",a)

    // Example 2 :
    let x = 10;                 
    const name = "Fatima";      
    let age = 22;
    console.log("the a value of x is:",x)
    console.log("My name and age  is:",name , age) 

   
/* ADDITION ASSIGNMENT (+=) */
    console.log("Examples Of  ADDITION Assignment Operator")
    // Example 1:
    a+=5; //a=a+5
    console.log("the addition assignment ope:",a) //output =10

    // Example 2:
    let count = 0;
    count += 1; // This increments count by 1
    console.log(count); // Output: 1

    // Example 3:
    let num = 5;
    num += 2 * 3; // This adds the result of the expression to num
    console.log(num); // Output: 11

    //Example 4:
    let greeting = "Hello, ";
    greeting += "world!"; // This concatenates the strings
    console.log(greeting); // Output: "Hello, world!"

    //Example 5:
    let balance = 100; // Initial balance
    balance += 50; // Adding a deposit
    console.log(balance); // Output: 150


/* SUBTRACTION ASSIGNMENT (-=) */
    console.log("Examples Of  SUBTRACTION Assignment Operator")
    // Example 1:
    let dec=5;
    dec-=1
    console.log(dec); // Output

    // Example 2:
    var score = 100;
    score -= 20; // Deducting points from the score
    console.log(score); // Output: 80

    //Example 3:
    let budget = 500; // Initial budget
    budget -= 150; // Spending on groceries
    console.log(budget); // Output: 350

    //Example 4:
    let temperature = 75; // Initial temperature in Fahrenheit
    temperature -= 10; // Decrease temperature for cooling
    console.log(temperature); // Output: 65

    //Example 5:
    let loanAmount = 2000; // Initial loan amount
    loanAmount -= 500; // Making a payment
    console.log(loanAmount); // Output: 1500


/* MULTIPLICATION ASSIGNMENT (*=) */
    console.log("Examples Of  MULTIPLICATION Assignment Operator")
    //Example 1:
    var t = 5;
    var u = 11;
    res = t * u;
    console.log(res)

    //Example 2:
    let value = 5;
    value *= 3; // Multiplies value by 3
    console.log(value); // Output: 15

    //Example 3:
    let number = 8;
    number *= 2; // Doubling the value
    console.log(number); // Output: 16

    //Example 4:
    let price = 20; // Initial price
    price *= 1.5; // Increasing price by 50%
    console.log(price); // Output: 30

    //Example 5:
    let kilometers = 10; // Distance in kilometers
    const conversionFactor = 0.621371; // Conversion factor from kilometers to miles
    kilometers *= conversionFactor; // Convert to miles
    console.log(kilometers); // Output: 6.21371


/* DIVISION ASSIGNMENT (/=) */
    console.log("Examples Of  DIVISION Assignment Operator")
    //Example 1: Basic Division
    let val = 20;
    val = val/ 4; // Divides value by 4
    console.log(val); // Output: 5

    //Example 2: Calculating Average
    let total = 100;
    let coun = 4;
    let average = total / coun; // Calculates average
    console.log(average); // Output: 25

    //Example 3:  Speed Calculation
    let distance = 150; // Distance in miles
    let time = 3; // Time in hours
    let speed = distance / time; // Calculates speed
    console.log(speed); // Output: 50

    //Example 4:  Share Distribution
    let shares = 100; // Total shares
    let people = 4;
    let sharesPerPerson = shares / people; // Calculates shares per person
    console.log(sharesPerPerson); // Output: 25


/* REMAINDER ASSIGNMENT (/=) */
    console.log("Examples Of  REMAINDER Assignment Operator")
    //Example 1:
    let v = 10;
    let remainder = v % 3; // Calculates the remainder of 10 divided by 3
    console.log(remainder); // Output: 1

    //Example 2:
    let n = 15;
    let isEven = n % 2 === 0; // Checks if the number is even
    console.log(isEven); // Output: false

    //Example 3:
    let items = 14;
    let groups = 5;
    let itemsLeft = items % groups; // Items that remain after equal distribution
    console.log(itemsLeft); // Output: 4

    //Example 4:
    let totalSlices = 8;
    let pe = 3;
    let leftoverSlices = totalSlices % pe; // Slices that cannot be evenly distributed
    console.log(leftoverSlices); // Output: 2



// EXPONENTION ASSIGNMENT (**)
console.log("Examples Of  EXPONENTION Assignment Operator")
    //Example 1:
    let base = 2;
    let exponent = 3;
    let result = base ** exponent; // Calculates 2 raised to the power of 3
    console.log(result); // Output: 8

    //Example 2:
    let n1 = 4;
    let squared = n1** 2; // Calculates 4 squared
    console.log(squared); // Output: 16

    //Example 3:
    let baseNegative = 2;
    let negativeExponent = -3;
    let resultNegative = baseNegative ** negativeExponent; // Calculates 2 raised to the power of -3
    console.log(resultNegative); // Output: 0.125

    //Example 4:
    let largeBase = 3;
    let largeExponent = 4;
    let largeResult = largeBase ** largeExponent; // Calculates 3 raised to the power of 4
    console.log(largeResult); // Output: 81


// INCREMENT OPERATOR (++)
console.log("Examples Of  INCREMENT Assignment Operator")
    //Example 1:
    let agee = 25;
    agee++; // Increments age by 1
    console.log(agee); // Output: 26
   
    //Example 2:
    let attempts = 5;
    attempts++; // Increments attempts by 1
    console.log(attempts); // Output: 6

    //Example 3:
    let inventory = 50;
    inventory++; // Adds one more item to inventory
    console.log(inventory); // Output: 51

    //Example 4:
    let valueee = 5;
    let cubed = valueee ** 3; // Calculates 5 cubed
    console.log(cubed); // Output: 125


// DECREMENT OPERATOR (--)
console.log("Examples Of  DECREMENT Assignment Operator")
    //Example 1:
    let countt = 5;
    countt--; // Decrements count by 1
    console.log(countt); // Output: 4

    //Example 2:
    let scoreee = 20;
    scoreee--; // Decreases score by 1
    console.log(scoreee); // Output: 19

    //Example 3:
    let attempt = 3;
    attempt--; // Decrements attempts by 1
    console.log(attempt); // Output: 2

    //Example 4:
    let ageee = 30;
    ageee--; // Decrements age by 1
    console.log(ageee); // Output: 29

    //Example 5:
    let inven = 100;
    inven--; // Removes one item from inventory
    console.log(inven); // Output: 99













