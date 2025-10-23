function startCountdown(seconds) {
  let remainingTime = seconds;
  process.stdout.write(`\rTime remaining: ${remainingTime}s`);
}
const timerId = startCountdown(5);
