// Create a function that simulates searching an API.
// The search function should only execute if the user pauses
// typing for a minimum of 500 milliseconds (half a second).
// If a new keystroke occurs before the delay is over,
// the previous search must be cancelled.

// debounce.js
export function debounce(fn, delay = 300) {
  let timerId; // stores the timeout ID

  return function (...args) {
    const context = this; // preserve "this" context

    // Clear the previous timer if function is called again
    clearTimeout(timerId);

    // Schedule a new one
    timerId = setTimeout(() => {
      // fn.apply(context, args); // forward context + args
      fn(...args);
    }, delay);
  };
}

function handleSearchInput(query) {
  console.log(`[Input] User typed: "${query}"`);
}

const debounceSearchInput = debounce(handleSearchInput, 500);
