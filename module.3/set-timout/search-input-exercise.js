const DELAY = 500;
// 1. Global state variable to hold the timer ID
let searchTimerId = null;

// The simulated resource-intensive function
function simulateAPICall(query) {
  console.log(`--- FETCHING: Results for "${query}" ---\n`);
}

// 2. The core handler function (simulating an event listener)
function handleSearchInput(query) {
  console.log(`[Input] User typed: "${query}"`);
  simulateAPICall(query);
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
