// 1. String Interpolation

// Embed expressions directly inside strings using ${expression}.

const a = 5;
const b = 10;
console.log(`Sum: ${a + b}`); // Sum: 15

// 2. Multiline Strings

// Supports multiple lines without \n or concatenation.

const multiline = `This is
a multiline
string.`;

// 3. Function Expressions

// You can call functions inside ${}.

const greet = (name) => `Hello, ${name}`;
console.log(`${greet("John")}`); // Hello, John

// 4. Tagged Templates

// Advanced use: Custom functions (called tag functions) process template literals.

function tag(strings, value) {
  console.log(strings); // [ "Hello, ", "" ]
  return strings[0] + value.toUpperCase();
}
const result = tag`Hello, ${"world"}`;
console.log(result); // Hello, WORLD
