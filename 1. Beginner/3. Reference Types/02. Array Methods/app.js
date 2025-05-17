// push() -> Add item at the end of the array
// pop() -> Remove item at the end of the array
// shift() -> Remove from the start
// unshift() -> Add to start
// concat() -> combining arrays

const fruits = [
  "apples",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];

console.log(fruits);
fruits.push("banana");
fruits.pop();
fruits.shift();
fruits.unshift("orange");

// CONCAT
// const fruits = ["apples", "pomegranate", "mango"];
// const moreFruits = ["strawberries", "pineapple", "grapefruit"];
// const totalFruits = fruits.concat(moreFruits);

console.log(fruits);

// includes - checks if an array contains a specified element
// join - creates string from array
// reverse - reverse an array
// slice - copy portion of an array
// sort - sorts an array

let pl = ["JavaScript", "Golang", "Python", "php"];
let numbers = [3, 5, 2, 4, 1];

console.log(pl.includes("Golang"));
console.log(pl.join("-"));
console.log(pl.reverse());
console.log(pl.slice(0, 3));
console.log(pl.sort());

// splice - The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

const fruit = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruit.splice(2, 0, "Lemon", "Kiwi");

const fruitArr = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 2 items
fruitArr.splice(2, 2);

const fruitArr2 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
fruitArr2.splice(2, 1, "Lemon", "Kiwi");
