// ✅ Example with Array

const numbers = [1, 2, 3];

for (let num of numbers) {
  console.log(num);
}
// Output: 1  2  3

// ✅ Example with String

for (let char of "Hi") {
  console.log(char);
}
// Output: H  i

// ✅ Example with Set

const fruits = new Set(["apple", "banana", "apple"]);

for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple  banana

// ✅ Example with Map

const userMap = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

for (let [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25

// 🔁 Difference from for...in
// Feature	          |         for...in	                     |                 for...of
// Iterates over	  |  Keys (object properties, indexes)	     |      Values (of iterable objects)
// Works best with	  |              Objects	                 |          Arrays, Strings, Sets, Maps
// Includes prototype |	              Yes	                     |               No

// ❗ Cautions

// Throws error if used on non-iterables (e.g., plain objects).

// To iterate over object properties, use for...in or Object.entries() with for...of.
