function createProgressBar(totalSteps, barLength = 30) {
  // --- Private State (Closure Variables) ---
  let currentStep = 0;
  const stepSize = 100 / totalSteps;
  const barChars = { filled: "█", empty: "░" };

  // --- Private Helper Function: Renders the bar ---
  const render = () => {
    const progress = Math.min(100, currentStep * stepSize);
    const filled = barChars.filled;
    const empty = barChars.empty;
    const bar = `[${filled}${empty}]`;

    // 🌟 ONLY use process.stdout.write with '\r' for the dynamic line
    process.stdout.write(`\rLoading: ${bar} ${progress.toFixed(0)}%`);
  };

  // --- Initial setup messages ---
  console.log(`Initialized progress bar with ${totalSteps} steps.`);
  setInterval(() => {
    // console.log("1");
    currentStep++;
    render(); // Draw the initial 0% bar
  }, 1000);
}

createProgressBar(20, 40);
