// ✅ 1. Using document Object

// The document object is the entry point to the DOM.

// Provides various methods to select HTML elements.

// ✅ 2. DOM Selection Methods

// Method	                                    Description	                                        Example
// getElementById(id)	                    Selects a single element by ID	                        document.getElementById("myId")
// getElementsByClassName(className)	    Returns a live HTMLCollection of elements	            document.getElementsByClassName("myClass")
// getElementsByTagName(tagName)	        Returns a live HTMLCollection of elements by tag	    document.getElementsByTagName("div")
// querySelector(selector)	                Returns the first matching element (CSS selector)	    document.querySelector(".myClass")
// querySelectorAll(selector)	            Returns a NodeList of all matching elements	            document.querySelectorAll("p.note")

// ✅ 3. Examples

// 📍 By ID

// const title = document.getElementById("main-title");

// 📍 By Class Name

// const items = document.getElementsByClassName("item");

// 📍 By Tag Name

// const paragraphs = document.getElementsByTagName("p");

// 📍 Using CSS Selectors

// const firstButton = document.querySelector("button.primary");  // Will give null if not found
// const allButtons = document.querySelectorAll("button.primary");

// ✅ 4. NodeLists vs HTMLCollections

// Feature	        NodeList (querySelectorAll)	        HTMLCollection (getElementsByClassName)
// Live?	        ❌ Static	                       ✅ Live
// Methods	        forEach() supported	                Requires loop or Array.from()

// ✅ 5. Best Practice

// Use querySelector / querySelectorAll for flexibility (CSS-like syntax).

// Use getElementById when you know the ID is unique and performance matters.
