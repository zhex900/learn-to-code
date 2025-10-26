/**
 * HOF: timeFunction
 * Executes the given function (fn) with the provided arguments and measures its runtime.
 * @param {Function} fn - The function to time.
 * @param {...any} args - Arguments to pass to the function.
 * @returns {number} The execution time in milliseconds.
 */
function timeFunction(fn, ...args) {
  const start = performance.now(); // Start high-resolution timer

  fn(...args); // Execute the function with its arguments

  const end = performance.now(); // End timer
  return (end - start).toFixed(4); // Return time in milliseconds (4 decimal places)
}
