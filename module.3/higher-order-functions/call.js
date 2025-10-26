// Data: Our array of objects
const students = [
  { name: "Alice", score: 85, city: "London" },
  { name: "Bob", score: 92, city: "Paris" },
  { name: "Charlie", score: 78, city: "London" },
];

// Higher-Order Function (HOF): A function that takes another function (criteriaFn)
function findByCriteria(criteriaFn) {
  // The HOF iterates and executes the passed-in function
  return this.find(criteriaFn);
  // NOTE: 'this' here is expected to be the 'students' array
}

// 1. The Callback Function (Criteria)
function isHighScorer(student) {
  return student.score > 90;
}

// 2. Executing with .call()
// We call findByCriteria, explicitly setting 'this' to the students array,
// and passing the isHighScorer function as the criteriaFn argument.
/*
 * The first argument passed to .call() is explicitly
 * set as the value of this inside findByCriteria for that specific execution.
 */
const highScoringStudent = findByCriteria.call(students, isHighScorer);

console.log("Ex 1 Result:", highScoringStudent);
// Expected Output: { name: 'Bob', score: 92, city: 'Paris' }

// borrowing functions

// function listArgs() {
//   console.log("Type of arguments:", typeof arguments); // 'object'

//   // 1. We borrow the slice() method from the Array prototype.
//   // 2. We call it, setting 'this' to the array-like 'arguments' object.
//   // 3. slice() is executed on 'arguments', returning a NEW, real array.
//   const realArray = Array.prototype.slice.call(arguments);
//   // const realArray = arguments.slice() / this.slice()

//   console.log("Type of realArray:", Array.isArray(realArray)); // true
//   realArray.pop(); // Now we can use array methods!

//   return realArray;
// }

// const result = listArgs(10, 20, 30, 40);
// console.log("Borrowed and modified array:", result); // [10, 20, 30]

// use case
// use map, filter, forEach on array-like objects
// It reads this.length: It needs a numerical value
// It accesses this[i]: It looks up the values at the numbered indices.

// Example: Borrowing Array methods on a NodeList
const list = document.querySelectorAll("div"); // NodeList is not a true Array
Array.prototype.forEach.call(list, (item) => {
  // 'this' inside forEach is the NodeList
  item.classList.add("processed");
});

// exercise 1,
// create a function that get all the nodes that matches a class
// use the .filter function

// create a higher order function that applies a function
// each DOM node.

// exercie 2,
/**
 * HOF: DOM.forEach
 * Borrows Array.prototype.forEach to run a callback on NodeList.
 * * @param {NodeList} nodes
 * @param {Function} callbackFn The function to execute on each item.
 */
function eachNode(nodes, callbackFn) {
  // implement here
}

console.log("--- Running HOF with Array-Like Object ---");
eachNode(
  // nodes
  document.querySelectorAll("div"),
  // callbackFn
  console.log
);

//// .apply

// 1. Utility function to join parts into a complete URL string
// This function expects 'this' to be the array of URL parts.
function buildURL(separator) {
  // Borrow Array.prototype.join to concatenate the parts in 'this'
  return Array.prototype.join.call(this, separator);
}

// 2. Logger function: Expects arguments as array of data points to log
function logger(type, message, ...data) {
  console.log(`[${type.toUpperCase()}] ${message}:`);

  // We borrow Array.prototype.forEach to cleanly display the data array
  // Here, 'this' (the Logger object) is null/undefined, but we use .apply()
  // to execute the borrowed function on the 'data' array.
  Array.prototype.forEach.apply(data, [
    (item) => {
      console.log(` - ${item}`);
    },
  ]);
}

// 1. Data Segments
const urlSegments = ["https://api", "v1", "users", "report.json"];

// 2. Build URL using .apply()
// We borrow buildURL, setting 'this' to urlSegments and passing the separator '/'
const finalURL = buildURL.apply(urlSegments, ["/"]);
console.log("\n--- Step 2 Result ---");
console.log(finalURL);

// 3. Log Result using .apply()
// Arguments for logger: ['STATUS', 'URL Created', finalURL]
const logArguments = ["STATUS", "URL Created", finalURL];

// We use .apply() to execute the logger. 'this' is null/undefined.
// We pass the logArguments array directly to logger.
console.log("\n--- Step 3 Log ---");
logger.apply(null, logArguments);
/*
Expected Output:
[STATUS] URL Created:
 - https://api/v1/users/report.json
*/
