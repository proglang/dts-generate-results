var browserLogs = require('protractor-browser-logs');

describe('Home page:', function () {

  var logs;

  beforeEach(function () {
    logs = browserLogs(browser);
    logs.ignore(logs.DEBUG);
    logs.ignore(logs.INFO);
  });

  afterEach(function () {
    return logs.verify();
  });

  it('should log an error after clicking a button', function () {
    logs.expect(/server request failed/);

    browser.get('...');
    element(by.id('button')).click();
  });

});
