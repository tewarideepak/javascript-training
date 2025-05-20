// ✅ 1. Arrays

// Copy an array:

const original = [1, 2, 3];
const copy = [...original];

// Merge arrays:

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

// Add elements to an array:

const extended = [0, ...original, 4];

// ✅ 2. Objects (ES2018+)

// Clone an object:

const user1 = { name: "Alice" };
const clone = { ...user1 };

// Merge objects:

const user2 = { name: "Alice" };
const details = { age: 25 };
const combined = { ...user2, ...details };

// Override properties:

const base = { role: "user", active: true };
const updated = { ...base, role: "admin" }; // role becomes "admin"

// ✅ 3. Function Arguments

// Pass array elements as individual arguments:

function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
sum(...nums); // same as sum(1, 2, 3)

// ✅ 4. Strings

// Convert string to array:

const str = "hello";
const chars = [...str]; // ['h', 'e', 'l', 'l', 'o']

// 🔹 Spread vs. Rest Operator

// Same syntax (...) but different behavior:

// Spread: Expands elements

// Rest: Collects elements into an array

// Spread
const arr = [1, 2, 3];
const copy2 = [...arr];

// Rest
function logAll(...args) {
  console.log(args); // collects all arguments into an array
}
