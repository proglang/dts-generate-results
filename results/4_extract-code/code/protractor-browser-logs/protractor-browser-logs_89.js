onPrepare = function () {

  var browserLogs = require('protractor-browser-logs'),
      logs = browserLogs(browser);

  if (global.logs) {
    throw new Error('Oops, name is already reserved!');
  }
  global.logs = logs;

  beforeEach(function () {
    logs.reset();

    // You can put here all expected generic expectations.
    logs.ignore('cast_sender.js');
    logs.ignore('favicon.ico');

    logs.ignore(logs.or(logs.INFO, logs.DEBUG));
  });

  afterEach(function () {
    return logs.verify();
  });
};
