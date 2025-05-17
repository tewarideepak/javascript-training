let firstName = "Deepak";
let lastName = "Tewari";
// 'Deepak'
// `Deepak`
console.log(firstName);
console.log(lastName);

// 1. CONCATENATION
// let fullName = firstName + " " + lastName;
// let fullName = firstName.concat(lastName);

// 2. APPEND
// firstName += " something else"

// 3. LENGTH
// console.log(firstName.length);

// 4. CASES
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

// 5. SLICE
// console.log(fullName.slice(0, 3));

// 6. SPLIT & JOIN
// console.log(fullName.split("").join("-"));

// 7. INCLUDES
// console.log(fullName.includes("Deepak"));

// 8. TRIM
// console.log(fullName.trim());

let desc = `This is some random
Text
`;

let fullName = `${firstName} ${lastName}`;
console.log(fullName);
