// Higher-order function: takes a function and returns a new one
function withLogging(fn) {
  return function (...args) {
    console.log("before ");
    // call fn
    const result = fn(...args);
    console.log("after");
    return result;
  };
}

// Regular function
function add(a, b) {
  return a + b;
}
function doNothing(a, b, c, d) {
  console.log("do nothing");
  return a + c + b + d;
}
// Wrap add() with logging behavior
const logDoNothing = withLogging(doNothing);

// Use it
console.log(logDoNothing(1, 2, 3, 4));
