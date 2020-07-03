var AxeBuilder = require('axe-webdriverjs');
var WebDriver = require('selenium-webdriver');

var driver = new WebDriver.Builder()
  .forBrowser('firefox')
  .build();

driver
  .get('https://dequeuniversity.com/demo/mars/')
  .then(function() {
    AxeBuilder(driver).analyze(function(err, results) {
      if (err) {
        // Handle error somehow
      }
      console.log(results);
    });
  });
