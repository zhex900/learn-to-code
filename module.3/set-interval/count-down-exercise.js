function startCountdown(seconds) {
  let remainingTime = seconds;
  // per second
  // remainingTime less a second
  // when remainingTime == 0 stop

  const intervalId = setInterval(() => {
    remainingTime--;
    process.stdout.write(`\rTime remaining: ${remainingTime}s`);
    if (remainingTime === 0) {
      // stop
      clearInterval(intervalId);
    }
  }, 1000);
}
const timerId = startCountdown(10);
