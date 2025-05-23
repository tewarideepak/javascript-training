// 🧪 1. every() Method

// ✅ Definition

// Checks if all elements in an array pass a test (provided by a callback function).

// Returns true only if every element satisfies the condition.

// 📚 Syntax

// array.every(callback(element, index, array), thisArg)

// 📤 Return Value

// true: if all elements pass the test.

// false: if any one fails the test.

// 🧩 Example

const numbers = [2, 4, 6];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // true

// 🧪 2. some() Method

// ✅ Definition

// Checks if at least one element in the array passes a test.

// Returns true as soon as one match is found.

// 📚 Syntax

// array.some(callback(element, index, array), thisArg)

// 📤 Return Value

// true: if any element passes the test.

// false: if none pass the test.

// 🧩 Example

const numbers2 = [1, 3, 4, 7];
const hasEven = numbers2.some((num) => num % 2 === 0);
console.log(hasEven); // true

// 🔁 Comparison Table

// Feature	                                every()                             	some()
// Test condition	                All elements must pass	               At least one element must pass
// Returns	                             true or false	                         true or false
// Stops checking when	                 First failure                         	 First success
// Use case	                       Validate full array	             Check for existence of a match

// ⚠️ Important Notes

// Both methods:

// Do not modify the original array.

// Are short-circuiting (stop early if result is known).

// Work only on arrays.
