/* 

Here's a simple exercise based on the provided JavaScript concepts for Karina:

Exercise: Understanding Arrays and Data Types
Objective: Practice working with arrays, data types, and basic JavaScript operations.

Part 1: Arrays
Create an array called colors with the following elements: "red", "green", "blue", and "yellow".✅
Access and print the second element of the colors array.✅
Modify the last element of the colors array to "purple".✅
Add the element "orange" to the beginning of the colors array.✅
Remove the first element from the colors array.✅
Use the length property to print the number of elements in the colors array.✅
Part 2: Data Types
Create a variable age and assign it a number (e.g., 25). Use typeof to check and print the data type of age.✅
*/

const x = [1, 2, 3]; // Before [1, 2, 3];
x[2] = 5; // After [ 1, 2, 5 ]
// console.log(x); // Final result : [ c, 2, 5 ]

let colors = ["red", "green", "blue", "yellow"];
// console.log(colors[1]);
colors[3] = "purple";
// console.log(colors);

colors.unshift("orange");
// console.log(colors);

colors.shift("orange");
//console.log(colors);

const length = colors.length;
//console.log(length);

let age = 8;
console.log(typeof age);

// Create a an array of store = ["Adidas","Nike", "Puma","Convers"]✅
// Create a variable called favoriteShoes✅
// Loop through the array of store and find Karina's fav shoes.✅

let store = ["Adidas", "Nike", "Puma", "Converse"];
let favShoes = "Nike";

for (let i = 0; i < store.length; i++) {
  if (store[i] === favShoes) {
    console.log(store[i]);
  }
}
