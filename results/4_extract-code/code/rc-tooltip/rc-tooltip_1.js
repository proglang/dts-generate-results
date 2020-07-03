var Tooltip = require('rc-tooltip');
var React = require('react');
var ReactDOM = require('react-dom');

// By default, the tooltip has no style.
// Consider importing the stylesheet it comes with:
// 'rc-tooltip/assets/bootstrap_white.css'

ReactDOM.render(
  <Tooltip placement="left" trigger={['click']} overlay={<span>tooltip</span>}>
    <a href="#">hover</a>
  </Tooltip>,
  container
);
