// ✅ Definition

// The find() method returns the first element in an array that satisfies a provided testing function.

// If no elements satisfy the condition, it returns undefined.

// 📚 Syntax

array.find(callback(element, index, array), thisArg);

// 🧩 Parameters

// callback (required):
// A function that takes up to 3 arguments:

// element: Current element being processed.

// index (optional): Index of the current element.

// array (optional): The array find() was called on.

// thisArg (optional):
// Value to use as this when executing the callback.

// 📤 Return Value

// The first element that passes the test.

// Returns undefined if no matching element is found.

// 📌 Key Features

// Does not modify the original array.

// Stops iterating after finding the first match.

// Often used for searching objects in an array.

// 🧪 Example Usage

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const result = users.find((user) => user.id === 2);
console.log(result); // { id: 2, name: "Bob" }

// ⚠️ Important Notes

// Use find() when you want only the first match, not all.

// For multiple matches, use filter() instead.

// Works only on arrays.
