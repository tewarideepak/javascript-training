// 1. Property Shorthand

// If the property key and variable name are the same, you can skip the key.

const name = "Alice";
const age = 30;

// ES5
const user1 = {
  name: name,
  age: age,
};

// ES6 (shorthand)
const user2 = {
  name,
  age,
};

// 2. Method Shorthand

// You can define methods without the function keyword.

const user3 = {
  greet() {
    return "Hello!";
  },
};

// Instead of:
const userOld = {
  greet: function () {
    return "Hello!";
  },
};

// 3. Computed Property Names

// Use expressions in square brackets [] as keys.

const key = "score";

const player = {
  name: "John",
  [key]: 42, // Same as: score: 42
};

// 4. Concise Merging with Object.assign() or Spread

const extra = { email: "a@example.com" };
const user4 = {
  name: "Alice",
  ...extra,
};

// (Note: object spread was added in ES2018, but often grouped with modern shorthand techniques.)
