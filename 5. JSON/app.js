// a. Converting a JavaScript object to JSON

// Use JSON.stringify():

const user = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(user);

console.log(jsonString);

// b. Converting JSON to a JavaScript object

// Use JSON.parse():

const jsonData = '{"name":"Alice","age":25}';
const jsObject = JSON.parse(jsonData);

console.log(jsObject);
