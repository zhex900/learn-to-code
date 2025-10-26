/**
 * memoize HOF: Takes a function (fn) and returns a new, "memoized" function.
 * @param {Function} fn - The expensive function to optimize.
 */
function memoize(fn) {
  const cache = {}; // Closure to store computed results

  // Returns the new function
  return function (...args) {
    const key = JSON.stringify(args); // Use arguments as the cache key

    // Check if the result is already cached
    if (cache[key] !== undefined) {
      console.log(`[Cache Hit] Returning F(${args[0]})`);
      return cache[key];
    }

    // If not cached, compute the result using the original function
    const result = fn.apply(this, args);
    cache[key] = result; // Store the result in the cache

    console.log(`[Computation] Calculating F(${args[0]})`);
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
