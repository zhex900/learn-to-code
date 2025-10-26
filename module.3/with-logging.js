// Higher-order function: takes a function and returns a new one
function withLogging(fn) {
  return function (...args) {
    console.log("Calling function with arguments:", args);
    const result = fn(...args);
    console.log("Function returned:", result);
    return result;
  };
}

// Regular function
function add(a, b) {
  return a + b;
}

// Wrap add() with logging behavior
const loggedAdd = withLogging(add);

// Use it
loggedAdd(3, 5);
