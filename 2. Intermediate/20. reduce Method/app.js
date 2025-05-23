// ✅ Definition

// The reduce() method executes a reducer function on each element of the array, accumulating a single result.

// 📚 Syntax

// array.reduce(callback(accumulator, currentValue, index, array), initialValue)

// 🧩 Parameters

// callback (required): Function to execute on each element:

//     accumulator: the accumulated result.

//     currentValue: the current element being processed.

//     index (optional): the index of the current element.

//     array (optional): the array reduce() was called upon.

// initialValue (optional but recommended): Value to use as the first argument of the first call to the callback.

// 📤 Return Value

// The final accumulated value.

// 🧪 Examples

// 🔢 Sum of Numbers

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// 🧾 Flatten an Array

const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4, 5]

// 🧑‍💼 Count Occurrences

const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); // { apple: 2, banana: 2, orange: 1 }

// ⚠️ Important Notes

// Without initialValue, the first element is used as the initial accumulator, and iteration starts from the second element.

// Always use initialValue to avoid bugs and improve clarity.

// Does not mutate the original array.

// Can be used for numbers, arrays, objects, strings, etc.

// 🧠 Use Cases

//     Sum, product, average

//     Grouping items

//     Counting

//     Flattening nested arrays

//     Implementing map/filter manually
