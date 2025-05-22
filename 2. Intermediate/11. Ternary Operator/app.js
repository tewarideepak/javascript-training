const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// If age >= 18 is true, returns "Adult"

// Else, returns "Minor"

// 🔁 Nested Ternary Operators

const score = 85;
const grade = score > 90 ? "A" : score > 75 ? "B" : "C";
console.log(grade); // "B"

// ⚠️ Avoid deep nesting → hard to read

// Use if...else for complex logic
