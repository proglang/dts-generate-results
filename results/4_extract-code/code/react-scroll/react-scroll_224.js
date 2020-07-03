var React   = require('react');
var Scroll  = require('react-scroll');
var ScrollLink = Scroll.ScrollLink;
var ScrollElement = Scroll.ScrollElement;

var Element = React.createClass({
  render: function () {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ScrollElement(Element);

var Link = React.createClass({
  render: function () {
    return (
      <a {...this.props}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = ScrollLink(Link);

