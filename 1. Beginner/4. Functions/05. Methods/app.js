// 1st way:

// function greet() {
//   return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
// }

// const person = {
//   name: "John",
//   age: 30,
//   greet,
// };

// console.log(person.greet());

// ================================================================

// 2nd way:

const person = {
  name: "Deepak",
  age: 22,
  greet: function () {
    return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
  },
};

console.log(person.greet());
