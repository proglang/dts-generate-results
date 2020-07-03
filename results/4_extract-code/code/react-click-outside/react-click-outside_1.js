const createReactClass = require('create-react-class');
const enhanceWithClickOutside = require('react-click-outside');
const React = require('react');

const Dropdown = createReactClass({
  getInitialState() {
    return {
      isOpened: false,
    };
  },

  handleClickOutside() {
    this.toggle();
  },

  toggle() {
    this.setState({ isOpened: !this.state.isOpened });
  },

  render() {
    ...
  },
});

module.exports = enhanceWithClickOutside(Dropdown);
