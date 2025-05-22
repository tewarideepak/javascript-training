# What is JS?

It is a versatile and widely-used programming language that plays a crucial role in web development. It enables developers to create interactive and dynamic elements within web pages, enhancing the user experience by adding functionality that responds to user actions. JS is primarily executed in web browsers, but it's also used in other environments like server-side scriptig (Node.js).

# Connect JS to HTMl

# Using Console and Comments

- Use 'clg' as a emmet for console.log

# Variables

// (reserved keyword) (variable name) (type of value)

# Rules to create variables

1. Cannot use reserved keywords
2. Cannot add spaces in between the variable name
3. Cannot start with a number
4. Cannot use special characters
5. Can use a "$" and "underscore"

# Convention

1. Declare variable in camelCase

# Primitive Types

1. Number
2. Boolean

# Difference between null, not defined and undefined

1. null

   It’s an intentional absence of any value.

   It’s a primitive value that means: "nothing", "empty", or "no value".

   You or the program usually assigns null explicitly.

let user = null;
// user exists, but has no value right now

2. undefined

   It means a variable has been declared, but no value has been assigned yet.

   JavaScript automatically assigns undefined to uninitialized variables.

let user;
console.log(user); // undefined

    Also, if a function doesn’t return anything, it returns undefined by default.

function greet() {}
console.log(greet()); // undefined

3. Not Defined

   Error case: When you try to use a variable that was never declared at all, JavaScript throws a ReferenceError.

console.log(user);
// ❌ ReferenceError: user is not defined

    Here, user wasn’t even declared.

# Comparison Operator

# Strings

# Type Conversion

# Conditional Statements

# Switch Statements

# For Loop

# While Loop

# Do While Loop

# Logical Operators

# Arrays

# Array Methods

| Method     |                                      Description                                       |
| ---------- | :------------------------------------------------------------------------------------: |
| concat()   |                     joins two or more arrays and returns a result                      |
| includes() |                    checks if an array contains a specified element                     |
| push()     |    aads a new element to the end of an array and returns the new length of an array    |
| unshift()  | adds a new element to the beginning of an array and returns the new length of an array |
| pop()      |          removes the last element of an array and returns the removed element          |
| shift()    |         removes the first element of an array and returns the removed element          |
| sort()     |          sorts the elements alphabetically in strings and in ascending order           |
| slice()    |                 selects the part of an array and returns the new array                 |
| splice()   |             removes or replaces existing elements and/or adds new elements             |

# Objects

# Functions

- A function is a block of code that performs a specific task.
- Function makes the code reusable. You can declare it once and use it multiple times.
- Function makes the program easier as each small task is divided into a function.
- Function increases readability.
- DRY - Don't Repeat Yourself
- function name(parameterIfAny) {...}

# Function Declaration & expression

# Callback Function

- When we provide function as an (argument) to other function that function is known as callback function.

# Scope

- Scope in JS refers to the current context of code, which determines the accessibility of variables to JS.

- There are two types of scopes in JS.

- Global scope variables are those declared outside of a block.

- Local scope variables are those declared inside of a block.

# Method

- In JavaScript, a method is a function that is associated with an object. It is a property of the object where the property's value is a function.

# JSON

In JavaScript, JSON stands for JavaScript Object Notation. It's a lightweight data format used for storing and exchanging data, especially between a client and server.

{
"name": "Alice",
"age": 25,
"isStudent": false
}

- JSON syntax is similar to JavaScript object literals but has stricter rules (e.g., property names must be in double quotes).

# Date & Time

# setInterval & setTimeout

# Template Strings

- Template strings (also called template literals) are a way to work with strings in a more flexible and readable manner.

- Introduced in ES6 (ECMAScript 2015).

- Syntax

Use backticks ( ` ` ) instead of single ('') or double ("") quotes.

const name = 'Alice';
const message = `Hello, ${name}!`;

# Arrow Function

- Arrow functions are a concise syntax for writing function expressions, introduced in ES6 (2015).

- When to Use Arrow Functions

1. Short, one-line functions

2. Callbacks (e.g., map, filter, setTimeout)

3. Functions where you want to inherit "this" from the surrounding context

- When Not to Use

1. When you need your own "this" (e.g., methods in classes/objects)

2. When using "new" or working with "arguments"

# Enhanced Object Literals

Enhanced Object Literals make it easier and cleaner to define object properties and methods using shorthand syntax introduced in ES6 (ES2015).

# Default Parameters

- Default parameters allow you to set default values for function parameters.

- If no argument is passed (or undefined is passed), the default value is used.

# Spread Operators

- It "spreads" or expands elements of an iterable (like arrays, objects, or strings) into individual elements.

# Rest Operators

- It "collects" multiple elements into a single array or object.

- Opposite of the spread operator.

- Commonly used in function parameters, array destructuring, and object destructuring.

# Array Destructuring

- A syntax to unpack values from arrays into separate variables.

- Introduced in ES6.

const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

# Object Destructuring

- A syntax to extract properties from objects into variables.

- Introduced in ES6.

# Function Destructuring

Function destructuring refers to extracting values from arrays or objects passed as arguments into a function, directly within the function parameter list.
