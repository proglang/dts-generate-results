var browserLogs = require('protractor-browser-logs');

describe('Home page:', function () {

  var log = browserLogs(browser);

  beforeEach(function () {
    // Use only one instance, but need to reset before each test.
    log.reset();

    // Combine matcher functions
    logs.ignore(logs.or(logs.DEBUG, logs.INFO));

    // Specify custom matcher function
    logs.ignore(function (message) {
      return message.message.indexOf('Oops') !== -1;
    });
  });

  it('should log an error after clicking a button', function () {
    // The sequence of expectations does matter
    logs.expect(/retrying/, logs.WARN); // Expect message having "retrying" text and WARNING level.
    logs.expect(/server request failed/, logs.ERROR);

    browser.get('...');
    element(by.id('button')).click();
  });

  afterEach(function () {
    return logs.verify();
  });

});
