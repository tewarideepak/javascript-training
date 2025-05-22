const person = {
  name: "Alice",
  age: 25,
  city: "Paris",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
// city: Paris

//   ⚠️ Important Notes

// Iterates keys (property names) only, not values directly

// Includes inherited enumerable properties from the prototype chain

// ✅ Use hasOwnProperty to avoid prototype properties

for (let key in object) {
  if (object.hasOwnProperty(key)) {
    // your logic here
  }
}

// 🔁 Not for Arrays (Use for...of or forEach instead)

const arr = [10, 20, 30];

for (let index in arr) {
  console.log(index); // index (0, 1, 2)
  console.log(arr[index]); // values (10, 20, 30)
}
// But better to use: for...of or array.forEach
