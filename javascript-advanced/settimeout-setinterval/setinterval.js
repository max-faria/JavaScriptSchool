let seconds = 0;

const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`Have been passed ${seconds} seconds`);
  if (seconds > 10) {
    clearInterval(intervalId);
    console.log("Time out! Finishing the application...");
  }
}, 1000 * 3);
