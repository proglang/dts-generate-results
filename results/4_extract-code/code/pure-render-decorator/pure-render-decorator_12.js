var React = require('react');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var Test = React.createClass({
  mixins: [
    PureRenderMixin
  ],

  render: function() {
    return <div></div>;
  }
});
