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
