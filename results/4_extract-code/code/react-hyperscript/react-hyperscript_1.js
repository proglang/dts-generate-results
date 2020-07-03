var h = require('react-hyperscript');
var React = require('react');

var AnotherComponent = require('./another-component');

module.exports = React.createClass({
  render: function render() {
    return (
      h('div.example', [
        h('h1#heading', 'This is hyperscript'),
        h('h2', 'creating React.js markup'),
        h(AnotherComponent, {foo: 'bar'}, [
          h('li', [
            h('a', {href: 'http://whatever.com'}, 'One list item')
          ]),
          h('li', 'Another list item')
        ])
      ])
    );
  }
});
