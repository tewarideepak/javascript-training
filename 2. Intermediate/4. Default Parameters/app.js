// Multiple Default Parameters

function multiply(a = 1, b = 1) {
  return a * b;
}

// Evaluated at Call Time

function getDefault() {
  console.log("Evaluated");
  return 42;
}

function demo(x = getDefault()) {
  return x;
}

demo(); // Logs "Evaluated", returns 42
demo(10); // No log, returns 10

// 🚫 Default Parameters and arguments

// arguments object does not reflect default values.

function test(a = 5) {
  console.log(arguments.length); // 0 if no argument passed
}
