const numbers = [1, 2, 3];

const squared = numbers.map((num) => num * num);

console.log(squared); // [1, 4, 9]

// 🆚 map() vs forEach()

// Feature	                          map()	                                   forEach()
// Return Value	               ✅ Returns a new array	                ❌ Returns undefined
// Use Case	                     Transforming data	                   Performing side-effects
// Chainable	                     ✅ Yes	                                   ❌ No

// 📌 Key Features

// Non-mutating: Doesn’t change the original array

// Commonly used in functional programming

// Often used in frameworks like React for rendering lists

// ⚠️ Cautions

// Always return something inside the callback — otherwise, undefined is added to the new array

const result = [1, 2, 3].map((num) => {
  num * 2; // missing return!
});
// result → [undefined, undefined, undefined]

// ✅ Fix:

const result1 = [1, 2, 3].map((num) => num * 2);
