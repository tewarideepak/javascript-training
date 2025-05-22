// 1. Object Destructuring in Parameters

// Used when a function expects an object and wants to directly access its properties.

function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet({ name: "Alice", age: 25 });

// ✅ Clean syntax

// ✅ Avoids repetitive obj.prop code

// ⚠️ Order doesn’t matter (named keys)

// 2. Array Destructuring in Parameters

// Used when a function expects an array and wants specific elements directly.

function sum([a, b]) {
  return a + b;
}

sum([3, 7]); // returns 10

// ✅ Based on index position

// ⚠️ Order matters

// 📌 Default Values

// You can provide defaults to avoid undefined.

function greet({ name = "Guest", age = 18 }) {
  console.log(`Hello ${name}, age ${age}`);
}

greet({}); // Hello Guest, age 18

// ❗ Cautions

// Destructuring on undefined/null will throw errors

function greet({ name }) {} // greet(undefined) → TypeError

// Fix:

function greet({ name } = {}) {}
