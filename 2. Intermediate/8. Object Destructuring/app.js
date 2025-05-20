// ✅ 1. Basic Destructuring

const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;

// ✅ 2. Renaming Variables

const user1 = { id: 1, username: "admin" };
const { username: name1 } = user1;

console.log(name1); // "admin"

// ✅ 3. Default Values

const user2 = { name: "Alice" };
const { name2, age = 30 } = user2;
// age gets default value 30

// ✅ 4. Nested Destructuring

const user3 = {
  name: "Bob",
  address: {
    city: "NYC",
    zip: 10001,
  },
};

const {
  address: { city },
} = user3;
console.log(city); // "NYC"

// ✅ 5. Destructuring in Function Parameters

function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

const user4 = { name: "Alice", age: 25 };
greet(user4);

// ✅ 6. Using Rest with Objects

const user = { name: "Tom", age: 30, role: "admin" };
const { name, ...rest } = user;

// name = "Tom"
// rest = { age: 30, role: "admin" }
