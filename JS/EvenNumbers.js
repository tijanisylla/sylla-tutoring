// const originalArray = [1, 3, 2, 5, 10];
// // evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition.
// const evenNumbers = originalArray.filter((data) => {
//   // The anonymous function uses a conditional to check if a number is divisible by 2.
//   if (data % 2 === 0) {
//     // If a number is even (divisible by 2), the condition returns true.
//     return data;
//   }
// });
const fs = require("fs");
// const isPrime = (num) => {
//   // Set up a loop that starts with 2 and continues to increment i as long as i is less than 2
//   for (let i = 2; i < num; i++) {
//     // isPrime will return false if num is divisible by any number other than 1 or num.
//     if (num % i === 0) return false;
//   }
//   // Otherwise, isPrime will return num, unless num == 1.
//   return num !== 1;
// };

// // TODO: Describe how filter is working in this example. What will the value of primeArray be?
// const primeArray = originalArray.filter(isPrime); // ✅
// // console.log(primeArray);

// // TODO: Describe how filter is working in this example. What will the value of moreThan5Array be?
// const moreThan5Array = originalArray.filter((num) => num > 5);
// // console.log(moreThan5Array);

// // doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition.
// // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
// const doubledArray = originalArray.map((data) => data * 2);

// console.log(doubledArray);
// console.log(originalArray);

// // TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// const tripledArray = originalArray.map((data) => data * 3);

// // TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// //? [ 1, 3, 2, 5, 10 ]
// const oddOrEven = originalArray.map((num) => {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// });

// // Exercise 1
// const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// // TODO: Which operator is being used here?
// const newSongs = [...songs];

// // TODO: What do you expect to be logged in the console?
// console.log(newSongs);

// // Exercise 2
// const addition = (x, y, z) => {
//   const array = [x, y, z];
//   // TODO: What does the reduce() method do?
//   return array.reduce((a, b) => a + b, 0);
// };
// // TODO: What do you expect to be logged in the console?
// console.log(addition(1, 2, 3));

// // TODO: What is this syntax that is being used as the parameter?
// const additionSpread = (...array) => array.reduce((a, b) => a + b, 0);

// // TODO: What do you expect to be logged in the console?
// console.log(additionSpread(1, 2, 3));

// // TODO: What do you expect to be logged in the console?
// console.log(additionSpread(1, 2, 3, 4, 100));

// Reduce;
// const array = [1, 2, 3];
// [1, 2, 3].reduce((a, b) => {
//   console.log(a + b);
// }, 0);

// const array = [1, 2, 3]; // total
// let sum = 0;
// for (let i = 0; i < array.length; i++) {

//   console.log((sum += array[i])); // sum +=  array[i] 6
// }

// Destructuring an object

const writeToLog = (message) => {
  const file = "log.txt";
  fs.writeFile(file, message, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("File has been created successfully");
    }
  });
};

const addFunc = (x, y) => {
  if (y === undefined) {
    const message = "Incorrect number of arguments have been passed in";
    console.log(message);
    writeToLog(message);
  } else {
    const num1 = Number.parseInt(x);
    const num2 = Number.parseInt(y);

    if (isNaN(num1) || isNaN(num2)) {
      const message = "Both arguments must be valid numbers";
      console.log(message);
      writeToLog(message);
    } else {
      const sum = num1 + num2;
      const message = `The sum of ${num1} and ${num2} is ${sum}`;
      console.log(message);
      writeToLog(message);
    }
  }
};

addFunc(process.argv[2], process.argv[3]);
