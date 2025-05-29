✅ What is DOM?

    DOM stands for Document Object Model.

    It is a programming interface for web documents.

    Represents the page so that programs can change the document structure, style, and content.

✅ Structure

    The DOM represents the document as a tree of nodes.

    Each node represents HTML elements, attributes, or text content.

    The root node is document.

✅ Common Node Types:
Node Type Example
Document document
Element <div>, <p>, <img>
Text Text inside elements
Attribute class="example"
Comment <!-- comment -->

✅ Accessing the DOM

document.getElementById('id');
document.querySelector('.class');
document.getElementsByTagName('p');
document.querySelectorAll('div');

✅ Manipulating the DOM

    Change content:

element.textContent = "New text";
element.innerHTML = "<strong>Bold</strong>";

    Change attributes:

element.setAttribute("src", "image.jpg");

    Change styles:

element.style.color = "red";

    Add/Remove elements:

parent.appendChild(newElement);
parent.removeChild(childElement);

✅ Event Handling

    DOM allows you to attach event listeners:

element.addEventListener("click", function() {
alert("Clicked!");
});

✅ DOM Tree Example:

<html>
  <body>
    <h1>Hello</h1>
  </body>
</html>

This becomes a tree:

    document

        html

            body

                h1

                    Text node: "Hello"

✅ Why DOM is Important?

    Enables dynamic web pages.

    Helps in creating interactive UIs.

    Central to JavaScript-based frontend development.
