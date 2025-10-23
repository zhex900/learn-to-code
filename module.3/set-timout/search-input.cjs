const readline = require("readline");
const DELAY = 500; // 500 milliseconds (0.5 second)

// 1. Global state variable to hold the timer ID
let searchTimerId = null;

// The simulated resource-intensive function
function simulateAPICall(query) {
  // Use stdout.write to keep the terminal clean and separate from input
  process.stdout.write(`\n--- FETCHING: Results for "${query}" ---\n`);
  // Reset the timer ID once the action successfully runs
  searchTimerId = null;
  // Restart the prompt for the next input line
  rl.prompt();
}

// 2. The core handler function (simulating an event listener)
function handleSearchInput(query) {
  // 3. CANCELLATION: If a timer is already running, cancel the pending search.
  if (searchTimerId) {
    clearTimeout(searchTimerId);
    // You could optionally log cancellation, but often debouncing should be silent
  }

  // 4. SCHEDULING: Schedule the new search to run after the delay.
  // 5. Store the new ID in the closure variable.
  searchTimerId = setTimeout(() => {
    simulateAPICall(query);
  }, DELAY);
}

// --- Setup Readline Interface for stdin ---

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Search> ",
});

console.log(
  `Starting live search debouncer. Search will execute ${DELAY}ms after you stop typing/pressing Enter.`
);
console.log(
  "Type a query and press Enter multiple times quickly to test cancellation.\n"
);

// Start the prompt
rl.prompt();

// The 'line' event fires when the user hits Enter
rl.on("line", (line) => {
  const query = line.trim();
  if (query) {
    // Pass the input to our debounced handler
    handleSearchInput(query);
  }
  // Re-display the prompt immediately, even if debounced
  rl.prompt();
});

rl.on("close", () => {
  console.log("\nExiting search handler.");
  process.exit(0);
});
