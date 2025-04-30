// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// {key: value}

// Creating Object
const person = {
  firstName: "Deepak",
  lastName: "Tewari",
  age: 18,
  location: ["Planet", "Earth"],
  isProgrammer: true,
};

// Accessing Properties
console.log(typeof person);
console.log(person.age);
console.log(person.location[1]);
console.log(person["isProgrammer"]);
// console.log(person[isProgrammer]); // ERROR -> without quotes

// Updating Properties
person.firstName = "Ankit";
console.log(person.firstName);
person.location = ["Mars", "Jupiter"];
console.log(person);

// Delete

delete person.firstName;
console.log(person);

// Add new properties
person.favAnime = "DBZ";
console.log(person);

// Error Case

const persons = {
  10: "ten",
};

// console.log(persons.10); // error
console.log(persons[10]);
