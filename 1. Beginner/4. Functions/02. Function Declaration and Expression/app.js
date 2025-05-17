// Function declaration

function sayHello(username) {
  console.log(`Hello ${username}`);
}

sayHello("Deepak");

// Function Expression

const greetings = function (user) {
  console.log(`Hello ${user}`);
};

greetings("Deepak");

// ERROR

greeting("Deepak");

const greeting = function (user) {
  console.log(`Hello ${user}`);
};
