for (let index = 0; index < 6; index++) {
  console.log("Hello", index);
}

for (let index = 0; index <= 5; index++) {
  console.log("--- Outer Loop ---", index);
  for (let j = 0; j <= 5; j++) {
    console.log("--- Inner Loop ---", j);
  }
}
