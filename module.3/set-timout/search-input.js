// 1. Global state variable to hold the timer ID
let searchTimerId = null;
const DELAY = 500;
// The simulated resource-intensive function
function simulateAPICall(query) {
  console.log(`--- FETCHING: Results for "${query}" ---\n`);
  // Reset the timer ID once the action successfully runs
  searchTimerId = null;
}

// 2. The core handler function (simulating an event listener)
function handleSearchInput(query) {
  console.log(`[Input] User typed: "${query}"`);

  // 3. CANCELLATION: If a timer is already running, cancel the pending search.
  if (searchTimerId) {
    clearTimeout(searchTimerId);
  }

  // 4. SCHEDULING: Schedule the new search to run after the delay.
  // 5. Store the new ID in the closure variable.
  searchTimerId = setTimeout(() => {
    simulateAPICall(query);
  }, DELAY);
}

// --- Test Case Execution ---

console.log("Starting typing simulation...");

// Scenario 1: Rapid typing (Should cancel and only run the last one)
handleSearchInput("a");
handleSearchInput("ap");
handleSearchInput("app");
handleSearchInput("appppppppppp");
handleSearchInput("appl");
handleSearchInput("apple"); // The API call will run only for 'apple'

// Scenario 2: Pause in typing (Should result in two API calls)
setTimeout(() => {
  handleSearchInput("banana"); // First call runs after 500ms
}, 1000);

setTimeout(() => {
  handleSearchInput("band"); // Second call runs after 500ms from this point
}, 2000);
