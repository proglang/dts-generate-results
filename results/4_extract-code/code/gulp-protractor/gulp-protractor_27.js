// Download and update the selenium driver
var webdriver_update = require('gulp-protractor').webdriver_update_specific;

// Downloads the selenium webdriver - stupid solution to pass extra args like ignore_ssl
gulp.task('webdriver_update', webdriver_update({
    webdriverManagerArgs: ['--ignore_ssl']
}));
