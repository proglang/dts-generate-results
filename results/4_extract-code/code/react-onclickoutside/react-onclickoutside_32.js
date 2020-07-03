// .default is needed because library is bundled as ES6 module
var onClickOutside = require("react-onclickoutside").default;
var createReactClass = require("create-react-class");

// create a new component, wrapped by this onclickoutside HOC:
var MyComponent = onClickOutside(
  createReactClass({
    // ...,
    handleClickOutside: function(evt) {
      // ...handling code goes here...
    }
    // ...
  })
);
