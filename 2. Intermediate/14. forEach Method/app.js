const colors = ["red", "green", "blue"];

colors.forEach(function (color, index) {
  console.log(`${index}: ${color}`);
});
// Output:
// 0: red
// 1: green
// 2: blue

// 🏹 Arrow Function Version

colors.forEach((color, index) => console.log(`${index}: ${color}`));

const words = ["hello", "bird", "table", "football"];

const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);

// 📌 Key Features

// Only works on arrays

// Cannot break, return, or continue (unlike loops)

// Automatically skips empty slots in sparse arrays

// ⚠️ Limitations

// Cannot stop or break the loop early

// Synchronous only

// Not suitable for async/await — use for...of instead

// 🆚 forEach vs for...of vs for...in

// Feature	                            forEach()	                             for...of	                         for...in
// Use with	                           Arrays only	                      Iterables (Arrays, Sets)	                  Objects
// Access	                             Values	                                  Values	                           Keys
// Breakable?	                         ❌ No	                           ✅ Yes (with break)	                    ✅ Yes
// Async Support	                     ❌ No	                           ✅ Yes (with for await)	                ❌ No
