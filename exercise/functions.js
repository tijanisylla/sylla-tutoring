// Description: Functions in JavaScript.

// Function declaration
function myFunction() {
  console.log("Hello World");
}

// Function with parameters
function myFunction2(name, lastname) {
  console.log("Hello " + name + " " + lastname);
}

function myFunction3(a, b, c) {
  return a * b * c;
}

// Function with default parameters
function myFunction4(a, b = 3) {
  return a * b;
}

// Function with rest parameters
function myFunction5(a, ...rest) {
  console.log(a);
  console.log(rest);
}

// Type of functions

// Function expression
const myFunction6 = function () {};

// Arrow function
const myFunction7 = () => {
  console.log("Hello World");
};

// Arrow function with parameters
const myFunction8 = (name, lastname) => {
  console.log("Hello " + name + " " + lastname);
};
