function createCounter() {
  // The variable to be "closed over"
  let count = 0;
  return function () {
    count += 1; // Accesses and modifies the 'count' from the outer scope
    return count;
  };
}
// Create two separate counter instances
const counter1 = createCounter(); // created another copy of count
const counter2 = createCounter();

console.log(counter1()); // Output: 1
// console.log(counter1()); // Output: 2 (counter1 remembers its 'count')

console.log("counter 2 --->", counter2()); // Output: 1 (counter2 has its own separate 'count' scope)
// console.log(counter1()); // Output: 3 (counter1 continues its count)

function makePowerFunction(power) {
  // 'power' is captured by the closure
  return function (base) {
    return Math.pow(base, power); // Uses the captured 'power'
  };
}

// Create specialized power functions
const square = makePowerFunction(2); // 'power' is 2
const cube = makePowerFunction(3); // 'power' is 3

const sq = (a, b) => Math.pow(a, b);

console.log(square(4)); // Output: 16 (4 * 4)
// console.log(cube(3)); // Output: 27 (3 * 3 * 3)
// console.log(square(10)); // Output: 100

// like class
// have internal state
// global scope

class PersonObject {
  constructor() {
    this.firstName = "Jake";
    this.lastName = "b0b";
  }
  getName() {
    return {
      firstName: this.firstName,
      lastName: this.firstName,
    };
  }
}

function Person() {
  // scope defined by the function getName
  const lastName = "James";
  const firstName = "Jake";

  return {
    lastName,
    firstName,
  };
}

// named function
function sum(a, b) {
  return (base = 0) => a + b * base;
}

// named variable
const sumV = (a, b) => a + b;

const sumfunction = sum(1, 2);
const v = sumfunction(10);
const vv = sumfunction(100);
console.log("sum -->", v, vv);
//map
//filter
//reduce
