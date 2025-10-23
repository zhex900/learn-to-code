/**
 * Starts a countdown timer that stops itself when it hits 0.
 * The internal 'remainingTime' is managed by a closure.
 * @param {number} seconds - The starting time in seconds.
 * @returns {number} The interval ID, allowing for external cancellation.
 */
function startCountdown(seconds) {
  // Private state variable maintained by the closure
  let remainingTime = seconds;

  const intervalId = setInterval(() => {
    // Log the current time before checking the stop condition
    process.stdout.write(`\rTime remaining: ${remainingTime}s`);

    // STOP CONDITION: Check if the time has run out
    if (remainingTime <= 0) {
      // 🌟 Use clearInterval() to stop the repetitive execution
      clearInterval(intervalId);
      process.stdout.write("\n--- Time's up! The interval has stopped. ---");
      return; // Exit the callback function
    }

    // Decrement the time for the next tick
    remainingTime--;
  }, 1000); // Run every 1000 milliseconds

  console.log(`Countdown started from ${seconds} seconds (ID: ${intervalId})`);
  return intervalId;
}

// --- Test Case Execution ---

// Start a 5-second countdown
const timerId = startCountdown(5);

// Optional: External cancellation demonstration (won't happen here, but possible)
// setTimeout(() => {
//     clearInterval(timerId);
//     console.log("Externally cancelled early!");
// }, 3500);
