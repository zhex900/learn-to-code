const fibCache = {};

/**
 * Calculates the Nth Fibonacci number using recursion with memoization.
 * * @param {number} n - The position in the sequence (0-indexed).
 * @param {object} cache - The object used to store previously computed results.
 * @returns {number} The Nth Fibonacci number.
 */
function fibonacci(n, cache = {}) {
  // 1. Base Cases
  if (n <= 1) {
    return n;
  }

  // 2. Check the Cache (Memoization Step)
  if (cache[n] !== undefined) {
    // If the result exists, return it instantly (Cache Hit)
    return cache[n];
  }

  // 3. Compute and Store (Cache Miss)
  // The result is computed recursively.
  const result = fibonacci(n - 1) + fibonacci(n - 2);

  // Store the newly computed result before returning
  cache[n] = result;

  return result;
}

// ---------------------------------------------

// --- Examples ---
// The cache must be initialized and passed in the first call.

console.log(`F(10): ${fibonacciMemo(10)}`); // 55
console.log(`F(40): ${fibonacciMemo(40)}`); // 102334155 (This is fast now)

// use closure to make a fibonacci function

// Check the cache contents (it now holds F(2) through F(40))
// console.log(fibCache);
