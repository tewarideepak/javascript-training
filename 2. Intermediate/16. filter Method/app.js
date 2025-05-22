const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter((num) => num % 2 === 0);

console.log(even); // [2, 4]

// 📌 Key Features

// Returns a new array

// Does not modify the original array

// Only includes items where the callback returns true

// 🆚 filter() vs map() vs forEach()

// Feature	                      filter()	                                 map()	                                forEach()
// Purpose	                     Filter items	                       Transform items	                         Perform actions
// Returns	                  New array (subset)	                New array (same length)	                        undefined
// Return needed?	            Yes (boolean)	                        Yes (new value)	                               No
// Chainable                     ✅ Yes	                                   ✅ Yes	                               ❌ No

// ✅ Use Cases

// Filter users by age, role, etc.

// Remove falsy values:

const cleaned = [0, "", "hi", null, 5].filter(Boolean);
// ["hi", 5]

// Search and match conditions

// Combine with .map() to transform filtered data

// ⚠️ Caution

// If no elements pass the test, returns an empty array – not undefined or null.
