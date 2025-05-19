// 1. With one parameter

const square = (x) => x * x;

// 2. With multiple parameters

const multiply = (a, b) => a * b;

// 3. With no parameters

const greet = () => "Hello!";

// 4. With block body (needs return)

const sum = (a, b) => {
  const result = a + b;
  return result;
};

// Key Differences from Regular Functions
// 1. ❌ No this binding

// Arrow functions do not have their own this.

// this refers to the lexical scope (where it was defined).

function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
// Works correctly due to arrow function

// 2. ❌ No arguments object

// Use rest parameters (...args) instead.

const showArgs = (...args) => console.log(args);

// 3. ❌ Not suitable as constructors

// Cannot use new with arrow functions.
