// ✅ Definition

// A Symbol is a primitive data type introduced in ES6.

// It represents a unique and immutable identifier.

// Often used as unique object keys to avoid name collisions.

// 📚 Syntax

// const sym = Symbol();

// You can also add an optional description:

const sym = Symbol("mySymbol");

// 🧪 Examples

// 🔑 Using as Object Keys

const id = Symbol("id");
const user = {
  name: "Alice",
  [id]: 123, // Symbol key
};

console.log(user[id]); // 123

// ❌ Symbols are Unique

const a = Symbol("desc");
const b = Symbol("desc");
console.log(a === b); // false

// 🧠 Why Use Symbols?

// To create unique keys that won’t accidentally overwrite other properties.

// To define private or non-enumerable object properties.

// 🔍 Symbols Are Not Enumerated

const id2 = Symbol("id");
const obj = { name: "Bob", [id2]: 1 };

for (let key in obj) {
  console.log(key); // logs "name", but not the Symbol
}

console.log(Object.keys(obj)); // ["name"]
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(id)]

// 🧩 Global Symbol Registry

// You can create or reuse global Symbols:

const globalSym = Symbol.for("shared");
const sameGlobalSym = Symbol.for("shared");
console.log(globalSym === sameGlobalSym); // true

console.log(Symbol.keyFor(globalSym)); // "shared"

// 🆚 Symbol vs String Key

// Feature	                        Symbol	                      String
// Uniqueness	                 Always unique	             Not guaranteed
// Enumerated in loops	        ❌ Not by default	             ✅ Yes
// Global registry	             ✅ Symbol.for()	                  N/A
// Use case	              Hidden, safe object keys	     Regular property names

// 📦 Use Cases

// Hidden/internal object properties (e.g., for libraries or frameworks)

// Constants or flags

// Meta-programming (e.g., Symbol.iterator)

// 🔧 Well-known Symbols

// JavaScript has built-in Symbol constants for customizing behavior:

Symbol.iterator; // For iteration
Symbol.toPrimitive; // Custom type conversion
Symbol.toStringTag; // Custom string description for objects
// ...and more
