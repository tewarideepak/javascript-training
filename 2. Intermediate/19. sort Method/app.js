// ✅ Definition

// The sort() method sorts the elements of an array in place and returns the sorted array.

// By default, it converts elements to strings and sorts them in lexicographical (dictionary) order.

// 📚 Syntax

// array.sort(compareFunction)

// 🧩 Parameters

// compareFunction (optional):

// A function that defines the sort order. It takes two arguments a and b:

// function(a, b) {
//     return a - b; // ascending order
// }

// 📤 Return Value

// The sorted array (same reference as the original).

// 🧪 Examples

// 🔡 Default Sort (Lexicographical)

const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

// 🔢 Sorting Numbers (with compareFunction)

const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 5, 10, 25, 40, 100]

numbers.sort((a, b) => b - a); // Descending
console.log(numbers); // [100, 40, 25, 10, 5, 1]

// 🧑‍💼 Sorting Objects by Property

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);
// [{ name: "Bob", age: 20 }, { name: "Alice", age: 25 }]

// ⚠️ Important Notes

// Mutates the original array.

// Without compareFunction, numbers will be sorted as strings, which can lead to incorrect results.

// sort() is not stable in older engines (items with same sort value may change order).

// Use slice() before sort() if you want to avoid changing the original array.

// 🧠 Common Use Cases

// Alphabetically sorting strings.

// Numerically sorting numbers.

// Sorting objects by a specific key.
