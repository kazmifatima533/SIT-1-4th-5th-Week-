/* LOGICAL OPERATOR AND (&&) */
    console.log("Examples Of LOGICAL AND:");
    // Example 1:
    const a=10;
    const b=10;
    if(a==10 && b==10){  //logical &&, if both condition is true then result true otherwise false
        console.log("The a and b are equal ")
    }

    // Example 2:
    const c=11;
    const d=12;
    if(c==11 && d==15){  //logical &&, if both condition is true then result true otherwise false
        console.log("The c and d are equal ")
    }else{
        console.log("c or d is not equal to")
    }

    //Example 3:
    let age1=25;
    let age2=30;
    if (age1== 25 && age2==30){
        console.log("The age1 and age2 are equal")
    }
    else {
        console.log("age1 and age2 not equal")
    }

    //Example 4:
    let age = 25; // Age of the person
    let hasValidLicense = true; // Whether the person has a valid driver's license
    if (age >= 18 && hasValidLicense) {
        console.log("You are allowed to drive.");
    } else {
        console.log("You are not allowed to drive.");
    }

    //Example 5:
    let hasRequiredDegree = true; // Whether the candidate has the required degree
    let yearsOfExperience = 3; // Years of relevant work experience
    if (hasRequiredDegree && yearsOfExperience <= 2) {
        console.log("You are eligible for an interview.");
    } else {
        console.log("You are not eligible for an interview.");
    }


/* LOGICAL OPERATOR OR (||) */
    console.log("Examples Of LOGICAL OR:");
    // Example 1:
    x=15;
    y=20;
    if(x==11 || y==20){    // if both false the result will be false otherwise true
        console.log("True y is equal to 20 but x is not equal to")
    }else{
        console.log("x or y is not equal to")
    }

    //Example 2:
    x1=4;
    x2=4;
    if  (x1==x2){
        console.log(x1==x2)
    }
    else {
        console.log("Not equal")
    }

    //Example 3:
    x3=6;
    x4=8;
    if  (x3==x4){
        console.log(x3==x4)
    }
    else {
        console.log("Not equal")
    }

    //Example 4:
    let isSunny = true; // Is it sunny?
    let isWarm = false; // Is it warm?
    if (isSunny || isWarm) {
        console.log("You can go outside!"); //Any true
    } else {
        console.log("Better stay indoors.");
    }

    //Example 5:
    let hasValidUsername = false; // Does the user have a valid username?
    let hasValidAccessLevel = true; // Does the user have a valid access level?
    if (hasValidUsername || hasValidAccessLevel) {
        console.log("Access granted.");
    } else {
        console.log("Access denied.");
    }





