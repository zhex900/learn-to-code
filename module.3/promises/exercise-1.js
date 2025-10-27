function nonBlockingFetch(delayInMs) {
  return new Promise((resolve) => {
    // 1. The setTimeout is NON-BLOCKING. It schedules the resolve
    //    callback to run LATER (after the delay) and immediately exits.
    setTimeout(() => {
      resolve(`Promise resolved after ${delayInMs / 1000} seconds.`);
    }, delayInMs);
  });
}

console.log("START: Synchronous code execution begins."); // Line 1

// Start the non-blocking asynchronous task
const promise = nonBlockingFetch(3000); // 3-second delay
console.log("continues...");
promise.then((result) => {
  console.log("ASYNC RESULT:", result); // Line 4 (Runs after 3 seconds)
});

// 2. This synchronous code executes immediately AFTER the nonBlockingFetch() call,
//    even though the Promise hasn't resolved yet.
console.log("MIDDLE: Synchronous code continues running."); // Line 2

// 3. This is the final synchronous line.
console.log("END: Synchronous code execution finished."); // Line 3

/* Expected Console Output Sequence:
1. START: Synchronous code execution begins.
2. MIDDLE: Synchronous code continues running.
3. END: Synchronous code execution finished.
(3-second pause)
4. ASYNC RESULT: Promise resolved after 3 seconds. 
*/
