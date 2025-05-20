// ✅ 1. Basic Destructuring

const [x, y] = [10, 20];

// ✅ 2. Skipping Values

const [first, , third] = [1, 2, 3];
// first = 1, third = 3

// ✅ 3. Using Rest with Destructuring

const [head, ...tail] = [1, 2, 3, 4];
// head = 1, tail = [2, 3, 4]

// ✅ 4. Default Values

const [a1 = 5, b1 = 10] = [7];
// a1 = 7, b1 = 10 (default used)

// ✅ 5. Swapping Variables

let a2 = 1,
  b2 = 2;
[a2, b2] = [b2, a];
// a2 = 2, b2 = 1

// ✅ 6. Nested Destructuring

const [a, [b, c]] = [1, [2, 3]];
// a = 1, b = 2, c = 3

// 🔹 Destructuring with Functions
// ✅ Return Array from Function

function getCoords() {
  return [12, 34];
}
const [lat, lon] = getCoords();
