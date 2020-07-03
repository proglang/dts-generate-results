const WindowsBalloon = require('node-notifier').WindowsBalloon;

var notifier = new WindowsBalloon({
  withFallback: false, // Try Windows Toast and Growl first?
  customPath: void 0 // Relative/Absolute path if you want to use your fork of notifu
});

notifier.notify(
  {
    title: void 0,
    message: void 0,
    sound: false, // true | false.
    time: 5000, // How long to show balloon in ms
    wait: false, // Wait for User Action against Notification
    type: 'info' // The notification type : info | warn | error
  },
  function(error, response) {
    console.log(response);
  }
);
