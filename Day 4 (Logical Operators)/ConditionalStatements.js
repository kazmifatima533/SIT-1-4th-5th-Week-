/* IF CONDITIONAL STATEMENT */
    console.log("Examples Of  IF CONDITIONAL STATEMENT ");
//Example 1:
let x = 7;
let y = 3;
if (x > 5 && y < 10) {
  console.log("Both conditions are true");
}

//Example 2:
var x1=5;
var y2=7;
if (x1 >= 5 || y2 > 10) {
  console.log("At least one condition is true");
}

//Example 3:
a=6;
if (!(a < 5)) {
  console.log("The condition is false when negated");
}

//Example 4:
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}

//Example 5:
let name = "Fatima";
if (name == "Fatima") {
    console.log("Hi Fatima!");
}

/* ELSE-IF And ELSE CONDITIONAL STATEMENT */
    console.log("Examples Of  ELSE-IF And ELSE CONDITIONAL STATEMENT ");
//Example 1:
let score = 85; // Score of the student
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//Example 2:
let temperature = 30; // Temperature in degrees Celsius
if (temperature > 30) {
    console.log("It's very hot outside. Wear shorts and a t-shirt.");
} else if (temperature > 20) {
    console.log("The weather is nice. A light jacket would be perfect.");
} else if (temperature > 10) {
    console.log("It's a bit chilly. Wear a sweater.");
} else {
    console.log("It's cold outside. Dress warmly!");
}

//Example 3:
let ages = 45; // Age of the person

if (ages < 13) {
    console.log("You are a child.");
} else if (ages < 20) {
    console.log("You are a teenager.");
} else if (ages < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}

//Example 4:
let speed = 80; // Speed of the vehicle in km/h
if (speed <= 60) {
    console.log("You are within the speed limit. No fine.");
} else if (speed <= 80) {
    console.log("You are slightly over the speed limit. Warning issued.");
} else if (speed <= 100) {
    console.log("You are significantly over the speed limit. Fine issued.");
} else {
    console.log("You are driving recklessly. Hefty fine and possible arrest!");
}

//Example 5:
let rating = 4.5; // Rating of the movie on a scale from 1 to 5
if (rating === 5) {
    console.log("Masterpiece! Must watch.");
} else if (rating >= 4) {
    console.log("Excellent! Highly recommended.");
} else if (rating >= 3) {
    console.log("Good! Worth watching.");
} else if (rating >= 2) {
    console.log("Okay! You might enjoy it.");
} else {
    console.log("Not recommended. Better skip this one.");
}



