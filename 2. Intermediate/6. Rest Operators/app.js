// ✅ 1. Function Parameters

// Collects remaining arguments into an array.

function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3); // 6

// Works with other parameters:

function greet(greeting, ...names) {
  console.log(greeting, names);
}

greet("Hi", "Alice", "Bob"); // "Hi", ["Alice", "Bob"]

// ✅ 2. Array Destructuring

// Collect the rest of the array elements into a variable.

const [first, ...rest1] = [1, 2, 3, 4];
// first = 1, rest1 = [2, 3, 4]

// ✅ 3. Object Destructuring (ES2018+)

// Gather remaining properties into a new object.

const user = { id: 1, name: "Alice", age: 25 };
const { name, ...rest } = user;
// name = "Alice", rest = { id: 1, age: 25 }
