// Arrays
//? Arrays
// Company
// [ 'Sylla', 'Karina', 'John','Amie'];
// console.log(company[0]);
// console.log(company[1]);
// console.log(company[3]);
// console.log(company[4]);

// You can loop , Pick a specific employer, Find employer, Find an index
const company = ["Sylla", "Karina", "John", "Amie"];
// Find the index of an array by doing array[0][1][2]
// Length of the array company.length
// console.log(company.length);
// Pop method
// console.log(company.pop([0]));

// console.log(company);
//! [ 'Sylla', 'Karina', 'John'];

// Push
// console.log(company.push("Aly", "Tijani"));
// console.log(company);
//! [ 'Sylla', 'Karina', 'John', 'Amie', 'Aly', 'Tijani' ]

// indexOf('Sylla')
// ["Sylla", "Karina", "John", "Amie"];
//! 0

// ?index-- means -1
let minus = 5;
// console.log(minus--); // 5 - 0
// console.log(minus--); // 5 - 1
// console.log(minus--); // 5 - 2
// console.log(minus--); // 5 - 3

//? index++ means +1
let plus = 5;
// console.log(plus++);
// console.log(plus++);
// console.log(plus++);
// console.log(plus++);

//? Foorloop
for (let index = 0; index < company.length; index++) {
  if (company[index] === "John") {
    break;
  }
  console.log(company[index]);
}
// 0 + 1 = 1 true
// 1 + 1 = 2 true
// 2 + 1 = 3 true
// 3 + 1 = 4 true
// 4 < 4 False

//? Loop stops right
//! ["Sylla", "Karina", "John", "Amie"];

//? Whileloop
let index = 0;
while (index < company.length) {
  const element = company[index];
  //   console.log(element, index, company);
  index++;
}

//?Map
// company.map((element, index, array) => {
//   console.log(element, index, array);
// });

//?Foreach
// company.forEach((element, index, array) => {
//   console.log(element, index);
//   console.log(array);
// });

// company.forEach(function (i) {
//   console.log(i);
// });

//? Filter
// const findJohn = company.filter(function (name) {
//   return name === "Sylla";
// });
// console.log(findJohn);
// console.log(findJohn);
// findIndexOf
// find

// console.log(1 + 1);
