// ✅ What is classList?

// classList is a property of DOM elements.

// Represents the element’s classes as a DOMTokenList (not just a string).

// Provides easy methods to add, remove, toggle, or check CSS classes.

// ✅ Syntax

// element.classList

// ✅ Common Methods

// | Method                   | Description                             | Example                                        |
// | ------------------------ | --------------------------------------- | ---------------------------------------------- |
// | `.add("class")`          | Adds a class                            | `el.classList.add("active")`                   |
// | `.remove("class")`       | Removes a class                         | `el.classList.remove("hidden")`                |
// | `.toggle("class")`       | Adds if not present, removes if present | `el.classList.toggle("dark-mode")`             |
// | `.contains("class")`     | Checks if the class exists              | `el.classList.contains("active")` → true/false |
// | `.replace("old", "new")` | Replaces one class with another         | `el.classList.replace("old", "new")`           |

// ✅ Example

// <div id="myBox" class="box"></div>

// const box = document.getElementById("myBox");

// Add class
// box.classList.add("active");

// Remove class
// box.classList.remove("box");

// Toggle class
// box.classList.toggle("highlight");

// Check if it has a class
// if (box.classList.contains("active")) {
//   console.log("Box is active");
// }

// Replace class
// box.classList.replace("active", "inactive");

// ✅ Looping Through Classes

// for (let cls of box.classList) {
//   console.log(cls);
// }

// ✅ Why Use classList?

// More powerful and safer than element.className.

// Prevents overwriting existing classes.

// Great for adding interactivity in JavaScript apps.
