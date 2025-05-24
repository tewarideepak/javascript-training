// ✅ Definition

// A Set is a built-in JavaScript object that stores unique values.

// It can hold any type of value — primitive or object.

// Duplicates are automatically removed.

// 📚 Syntax

// const set = new Set();

// You can also initialize with values:

const set = new Set([1, 2, 3]);

// 🔧 Common Methods & Properties

// Method / Property	                   Description
// add(value)	                  Adds a new value to the set
// has(value)	              Checks if a value exists in the set
// delete(value)	              Removes a value from the set
// clear()	                     Removes all values from the set
// size	                Returns the number of elements in the set

// 🧪 Examples

// ➕ Add Values

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(2); // duplicate, ignored
console.log(numbers); // Set {1, 2}

// 🔍 Check Existence

console.log(numbers.has(1)); // true
console.log(numbers.has(3)); // false

// ❌ Delete Values

numbers.delete(1); // Set now contains only 2

// 🔁 Iterate Through Set

for (const value of numbers) {
  console.log(value);
}

// 🧠 Use Cases

// Removing duplicates from an array:

const unique = [...new Set([1, 2, 2, 3, 3])]; // [1, 2, 3]

// Efficient existence checks (like checking membership)

// Maintaining a collection of unique items

// Implementing set operations like union, intersection, difference

// 🔁 Set Operations

// Union

const a = new Set([1, 2]);
const b = new Set([2, 3]);
const union = new Set([...a, ...b]); // Set {1, 2, 3}

// Intersection

const intersection = new Set([...a].filter((x) => b.has(x))); // Set {2}

// Difference

const difference = new Set([...a].filter((x) => !b.has(x))); // Set {1}

// 🆚 Set vs Array vs Object

// Feature	                   Set	                       Array	                     Object
// Duplicates	          ❌ Not allowed	               ✅ Allowed	           ✅ Allowed (keys only)
// Order	             ✅ Maintains order	        ✅ Maintains order	       ❌ No guaranteed order
// Key types	          N/A (only values)	                N/A	                   Only strings/symbols
// Use case	            Unique values	            Ordered list	             Key-value storage
