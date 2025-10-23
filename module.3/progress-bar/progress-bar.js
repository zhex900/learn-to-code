function createProgressBar(totalSteps, barLength = 30) {
  // --- Private State (Closure Variables) ---
  let currentStep = 0;
  const stepSize = 100 / totalSteps;
  const barChars = { filled: "█", empty: "░" };

  // --- Private Helper Function: Renders the bar ---
  const render = () => {
    const progress = Math.min(100, currentStep * stepSize);
    const filledChars = Math.round((progress / 100) * barLength);
    const filled = barChars.filled.repeat(filledChars);
    const empty = barChars.empty.repeat(barLength - filledChars);
    const bar = `[${filled}${empty}]`;

    // 🌟 ONLY use process.stdout.write with '\r' for the dynamic line
    process.stdout.write(`\rLoading: ${bar} ${progress.toFixed(0)}%`);
  };

  // --- Initial setup messages ---
  console.log(`Initialized progress bar with ${totalSteps} steps.`);
  render(); // Draw the initial 0% bar

  // --- Public Interface (Methods using the Closure) ---
  return {
    /** Increments the progress bar by one step and redraws. */
    increment: () => {
      if (currentStep < totalSteps) {
        currentStep++;
        render();
      }
    },

    /** Skips to 100%, prints the final bar, and the completion message. */
    finish: () => {
      if (currentStep !== totalSteps) {
        currentStep = totalSteps;
        render(); // Ensure it shows a full 100% bar
      }
      // Print a newline and the final message using console.log
      console.log("\nTask Completed! 🎉");
    },

    getCurrentStep: () => currentStep,
  };
}

// ----------------------------------------------------------------------
// --- USAGE EXAMPLE (with careful logging) ---
// ----------------------------------------------------------------------

// 1. Initialize the bar: it takes 20 increments to complete (5% per step).
const myLoader = createProgressBar(20, 40);

const runTasks = () => {
  // Standard logs appear on new lines
  //   console.log("Starting Task 1/3: Setup...");
  myLoader.increment(); // Updates bar on the line below

  setTimeout(() => {
    // console.log("Starting Task 2/3: Fetching Data...");
    myLoader.increment();
    myLoader.increment();
    myLoader.increment();

    setTimeout(() => {
      //   console.log("Starting Task 3/3: Processing Images...");

      let remainingSteps = 20 - myLoader.getCurrentStep();
      let interval = setInterval(() => {
        myLoader.increment();
        remainingSteps--;
        if (remainingSteps <= 0) {
          clearInterval(interval);
          myLoader.finish();
        }
      }, 150);
    }, 1000);
  }, 2000);
};

runTasks();
