// Create a function, d, that parses spec strings into React DOM:
var React = require('react')
var ReactDOM = require('react-dom')
var d = require('jsnox')(React)

// The function returned by JSnoX takes 3 arguments:
// specString (required)    - Specifies the tagName and (optionally) attributes
// props (optional)         - Additional props (can override output from specString)
// children (optional)      - String, or an array of ReactElements
var myDom = d('div.foo', {}, 'hello')

ReactDOM.render(myDom, myElement)  // renders <div class="foo">hello</div>
