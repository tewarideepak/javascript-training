function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});

function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

function cb() {
  console.log(`I am callback function`);
}

greet("Deepak", cb);
