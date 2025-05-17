// ⏰ setTimeout()

// Runs a function once after a delay

// 📌 Syntax:

// setTimeout(function, delayInMilliseconds, ...args);

// ✅ Example:

setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

// ❌ Cancelling:

const timeoutId = setTimeout(() => console.log("Too late"), 5000);
clearTimeout(timeoutId);

// 🔁 setInterval()

// Runs a function repeatedly at fixed intervals

// 📌 Syntax:

// setInterval(function, intervalInMilliseconds, ...args);

// ✅ Example:

setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);

// ❌ Cancelling:

const intervalId = setInterval(() => console.log("Tick"), 1000);
clearInterval(intervalId);
