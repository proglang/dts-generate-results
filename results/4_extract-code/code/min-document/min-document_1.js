var document = require("min-document")

var div = document.createElement("div")
div.className = "foo bar"

var span = document.createElement("span")
div.appendChild(span)
span.textContent = "Hello!"

/*  <div class="foo bar">
        <span>Hello!</span>
    </div>
*/
var html = String(div)
