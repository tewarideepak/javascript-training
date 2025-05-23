// ✅ Definition

// A Map is a built-in object in JavaScript that stores key-value pairs.

// Unlike regular objects, Map keys can be of any type (not just strings or symbols).

// 🧠 Key Features

// Keys can be objects, functions, or primitives.

// Maintains insertion order of keys.

// Has a size property to get the number of entries.

// 📚 Syntax

// const map = new Map();

// 🔧 Common Methods

// Method	                            Description
// set(key, value)	                  Adds or updates a key-value pair
// get(key)	                          Returns the value for a key
// has(key)	                          Checks if a key exists
// delete(key)	                      Removes a key-value pair
// clear()	                          Removes all entries
// size	                              Property that returns the number of entries
// keys()
// values()

// 🧪 Examples

// ➕ Add Key-Value Pairs

const userMap = new Map();
userMap.set("name", "Alice");
userMap.set("age", 25);
userMap.set({ id: 1 }, "Admin");

// 🔍 Access Values

console.log(userMap.get("name")); // "Alice"

// ❓ Check Existence

console.log(userMap.has("age")); // true

// ❌ Delete a Key

userMap.delete("age");

// 🔁 Iterating

for (const [key, value] of userMap) {
  console.log(key, value);
}

// 📌 Use Cases

// When you need key-value pairs and:

// Key types can be anything (objects, functions, etc.)

// Order of insertion matters

// Frequent addition/removal of entries

// 🔁 Comparison: Map vs Object
// Feature	                 Map	                                Object
// Key types	        Any (including objects)	           Strings and Symbols only
// Order	          Maintains insertion order             	No guaranteed order
// Iterable	             Yes (directly)	                 No (need Object.keys(), etc.)
// Performance	    Better for frequent additions	        Optimized for static structure
// Size property	        .size	                       Use Object.keys(obj).length
