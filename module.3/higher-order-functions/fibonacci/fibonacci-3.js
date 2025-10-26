/**
 * memoize HOF: Takes a function (fn) and returns a new, "memoized" function.
 * @param {Function} fn - The expensive function to optimize.
 */
function memoize(fn) {
  const cache = {}; // Closure to store computed results

  // Returns the new function
  return function (...args) {
    return result;
  };
}

// ----------------------------------------------------------------------

// 1. Define the Expensive Recursive Function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 2. Create the Optimized Function using the HOF
const optimizedFibonacci = memoize(fibonacci);

console.log("--- Executing F(6) ---");
optimizedFibonacci(6);

console.log("\n--- Executing F(6) Again ---");
// This time, the function will retrieve the result instantly from the cache.
optimizedFibonacci(6);
