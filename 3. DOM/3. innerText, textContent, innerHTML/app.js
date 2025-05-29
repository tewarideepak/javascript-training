// 📝 innerText vs textContent vs innerHTML

// Property	        Description	                                                        Includes Hidden Text?	         Interprets HTML?	      Performance
// innerText	    Returns visible text, respects CSS styling like display: none	    ❌ No	                        ❌ No	                Slower (renders layout)
// textContent	    Returns all text content, regardless of CSS styling	                ✅ Yes	                        ❌ No	                Faster (pure text)
// innerHTML	    Returns or sets HTML content (tags included)	                    ✅ Yes	                        ✅ Yes	                Moderate

// ✅ 1. innerText

// Gets or sets the rendered text (what you see on the screen).

// Ignores hidden elements (e.g., display: none).

// Triggers reflow (performance impact).

// element.innerText = "Hello <b>World</b>";
// Output: Hello <b>World</b> (as plain text)

// ✅ 2. textContent

// Gets or sets all text, including text in hidden elements.

// Does not interpret HTML.

// Fast and efficient.

// element.textContent = "Hello <b>World</b>";
// Output: Hello <b>World</b> (as plain text)

// ✅ 3. innerHTML

// Gets or sets the HTML markup inside the element.

// Interprets tags as real HTML.

// element.innerHTML = "Hello <b>World</b>";
// Renders: Hello **World** (with bold)

// 🔍 Example

// <div id="demo">
//   Hello <span style="display:none;">Hidden</span> <b>World</b>
// </div>

// const el = document.getElementById("demo");

// el.innerText    // "Hello  World"
// el.textContent  // "Hello Hidden World"
// el.innerHTML    // "Hello <span style="display:none;">Hidden</span> <b>World</b>"

// ⚠️ When to Use What?

// Use Case	                            Best Option
// Get/set plain visible text	        innerText
// Get/set all raw text	                textContent
// Insert/remove HTML content	        innerHTML
