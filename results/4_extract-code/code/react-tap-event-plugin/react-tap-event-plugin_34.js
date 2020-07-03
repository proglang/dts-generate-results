var React = require('react'),
injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin({
  shouldRejectClick: function (lastTouchEventTimestamp, clickEventTimestamp) {
    return true;
  }
});
