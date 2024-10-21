//trim() – Removes whitespace from both ends
//Create a program that checks if a string has any leading or trailing spaces and removes them.
// Given string with leading and trailing spaces
let String = "  Hello, World!  ";

// Check if the string has leading or trailing spaces
if (String !== String.trim()) {
  console.log("The string has leading or trailing spaces.");
  // Remove leading and trailing spaces
  let trimmedString = String.trim();
  console.log("Trimmed string:", trimmedString);
} else {
  console.log("The string does not have any leading or trailing spaces.");
}


//Given a list of names with extra spaces, clean up each name by trimming the whitespace. in js
// List of names with extra spaces
let namesList = ["  Fatima ", " Ali  ", " Shah ", "  syed", " Kazmi  "];

// Clean up each name by trimming the whitespace
//The map() function is used to iterate through each element (name) in the namesList array.
let cleanedNames = namesList.map(name => name.trim());

// Output the cleaned list
console.log(cleanedNames);
