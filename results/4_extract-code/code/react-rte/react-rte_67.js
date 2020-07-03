var React = require('react');
var RichTextEditor = require('react-rte');

React.createClass({
  propTypes: {
    onChange: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      value: RichTextEditor.createEmptyValue()
    };
  },

  render: function() {
    return React.createElement(RichTextEditor, {
      value: this.state.value,
      onChange: this.onChange
    });
  },

  onChange: function(value) {
    this.setState({value: value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  }

});
