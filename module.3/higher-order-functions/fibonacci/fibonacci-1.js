/**
 * Calculates the Nth Fibonacci number using a standard recursive approach.
 * WARNING: This is highly inefficient (exponential time complexity, O(2^n))
 * for large values of N due to repeated calculations.
 *
 * @param {number} n - The position in the sequence (0-indexed).
 * @returns {number} The Nth Fibonacci number.
 */
function fibonacci(n) {
  // Base Cases: Stopping conditions for the recursion
  if (n <= 1) return n;

  // Recursive Step: Calls itself twice for every step, causing exponential growth.
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// --- Examples ---
console.log(`F(0): ${fibonacci(0)}`); // 0
console.log(`F(5): ${fibonacci(5)}`); // 5
console.log(`F(10): ${fibonacci(10)}`); // 55
console.log(`F(40) is very slow...`); // Will take a noticeable amount of time
