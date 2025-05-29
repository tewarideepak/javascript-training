// ✅ What Are Attributes?

// HTML attributes provide additional information about elements (e.g., src, href, alt, class, id).

// You can use JavaScript to get or modify these attributes dynamically.

// ✅ 1. getAttribute(attrName)

// Gets the value of a specific attribute.

// element.getAttribute("href"); // e.g., "https://example.com"

// ✅ 2. setAttribute(attrName, value)

// Sets or updates the value of an attribute.

// element.setAttribute("src", "image.jpg");
// element.setAttribute("target", "_blank");

// ✅ 3. hasAttribute(attrName)

// Checks if the attribute exists.

// element.hasAttribute("disabled"); // true or false

// ✅ 4. removeAttribute(attrName)

// Removes an attribute from the element.

// element.removeAttribute("title");

// ✅ Example

// <a id="myLink" href="https://google.com" target="_self">Google</a>

// const link = document.getElementById("myLink");

// Get attribute
// console.log(link.getAttribute("href")); // "https://google.com"

// Set attribute
// link.setAttribute("href", "https://openai.com");

// Check attribute
// console.log(link.hasAttribute("target")); // true

// Remove attribute
// link.removeAttribute("target");

// ✅ Direct Property Access vs. getAttribute

// | Method         | Example                       | Notes                                                 |
// | -------------- | ----------------------------- | ----------------------------------------------------- |
// | Property       | `input.value`                 | Some attributes are directly accessible as properties |
// | `getAttribute` | `input.getAttribute("value")` | Reads the initial HTML attribute                      |

// 🔎 Note: element.value may differ from element.getAttribute("value") if the DOM was updated.

// ⚠️ Common Attributes You Might Use

// | Element    | Attribute                                             |
// | ---------- | ----------------------------------------------------- |
// | `<img>`    | `src`, `alt`                                          |
// | `<a>`      | `href`, `target`                                      |
// | `<input>`  | `value`, `type`, `placeholder`, `checked`, `disabled` |
// | `<button>` | `disabled`, `type`                                    |
// | All        | `id`, `class`, `style`, `title`                       |
