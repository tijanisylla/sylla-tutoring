/*
Datatypes :

The Concept of Data Types
In programming, data types is an important concept.
To be able to operate on variables, it is important to know something about the type.
Without data types, a computer cannot safely solve this:
 */
var age = 18; // number
var name = "Jane"; // string
var object = { first: "Jane", last: "Doe" }; // object
var truth = false; // boolean
vvarsheeets = [1, 2, 3]; // array/object
var a = null; // value null means nothing
var func = function () {};

// Check if the typeof "age" is a number, if it's a number print "Indeed it is" If it's not a number, print "Not a number"
// Code here

if (typeof age === "number") {
  console.log("Indeed it is");
} else {
  console.log("Not a number");
}
// console.log(typeof age);
// console.log(typeof object);
// console.log(typeof name);
// console.log(typeof truth);
// console.log(typeof sheets);
// console.log(typeof a);
// console.log(typeof sheets);
// console.log(typeof func);
