// 🧱 Object Nested Destructuring

const user = {
  name: "Alice",
  address: {
    city: "New York",
    zip: 10001,
  },
};

const {
  address: { city, zip },
} = user;

console.log(city); // "New York"
console.log(zip); // 10001

// ✅ Extracts city and zip directly

// ⚠️ address itself is not available as a variable unless explicitly destructured

// 🧱 Array Nested Destructuring

const numbers = [1, [2, 3]];

const [a, [b, c]] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// ✅ Works with nested arrays

// ⚠️ Index-based → order matters

// 🔁 Mixed Nested Destructuring

const data = {
  user: {
    name: "Bob",
    roles: ["admin", "editor"],
  },
};

const {
  user: {
    name,
    roles: [firstRole],
  },
} = data;

console.log(name); // "Bob"
console.log(firstRole); // "admin"

// ✅ Combine object + array destructuring

// ❗ Cautions

// Destructuring undefined/null values throws errors

const {
  foo: { bar },
} = obj; // if `foo` is undefined → error

// ✅ Fix:

const { foo: { bars } = {} } = obj;
