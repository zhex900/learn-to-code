function delayedMessage(message, delayMs) {
  // Use setTimeout to schedule the console log
  const timerId = setTimeout(() => {
    console.log(`[Scheduled] Message: ${message}`);
  }, delayMs);

  console.log(`Scheduling message '${message}' with ID: ${timerId}`);
  // Return the ID to allow for cancellation
  return timerId;
}

function cancelMessage(timerId) {
  // Use clearTimeout to prevent the scheduled function from running
  clearTimeout(timerId);
  console.log(`Canceled message with ID: ${timerId}`);
}

// --- Test Case 1: Success ---
// delayedMessage("Hello World", 2000); // This will execute after 2s

// --- Test Case 2: Cancellation ---
// const timerToCancel = delayedMessage("This should never print", 5000);

// We cancel it well before the 5 seconds is up
// setTimeout(() => {
//   cancelMessage(timerToCancel);
// }, 1000);

function startTicker() {
  let count = 0; // State variable for the ticker

  // Use setInterval to run the callback every 1000ms
  const intervalId = setInterval(() => {
    count++;
    console.log(`TICK: ${count}`);
  }, 1000);

  console.log(`Ticker started with Interval ID: ${intervalId}`);
  // Return the ID to allow the consumer to stop it later
  return intervalId;
}

function stopTicker(intervalId) {
  // Use clearInterval to stop the repetitive action
  clearInterval(intervalId);
  console.log(`Ticker stopped with Interval ID: ${intervalId}`);
}

// --- Test Case ---
// const myInterval = startTicker();

// Stop the ticker after 5.5 seconds (it should have ticked 5 times)
// setTimeout(() => {
//   stopTicker(myInterval);
// }, 5500);
/**
 * Simulates a text-based progress bar, updating the output on the same line.
 * This implementation relies on the 'process.stdout.write' method and the
 * carriage return (\r), which works reliably in Node.js and standard terminals.
 *
 * @param {number} durationMs - The total time the progress bar should take.
 * @param {number} barWidth - The total width of the bar (e.g., 25 characters).
 */
function startTextProgressBar(durationMs, barWidth = 30) {
  let progress = 0;
  const totalSteps = 20;
  const intervalTime = durationMs / totalSteps;
  const progressIncrement = 100 / totalSteps;

  console.log(`Starting load simulation for ${durationMs}ms...`);

  const intervalId = setInterval(() => {
    progress = Math.min(100, progress + progressIncrement);

    // 1. Calculate the number of filled characters
    const filledChars = Math.round((progress / 100) * barWidth);

    // 2. Build the bar string
    const filled = "█".repeat(filledChars); // Using the block character for better visual fill
    const empty = "░".repeat(barWidth - filledChars);
    const bar = `[${filled}${empty}]`;

    // 3. 🌟 KEY: Carriage Return (\r) + process.stdout.write
    // \r moves the cursor to the beginning of the line, overwriting previous content.
    process.stdout.write(`\rLoading: ${bar} ${progress.toFixed(0)}%`);

    if (progress >= 100) {
      clearInterval(intervalId); // Stop the loop

      // Print a final newline to ensure the next command prompt is on a new line
      process.stdout.write("\n");
    }
  }, intervalTime);
}

// --- Test Case: 4-second progress bar ---
// To run this, save it as a .js file (e.g., loader.js) and run it with Node:
// node loader.js
startTextProgressBar(4000);
