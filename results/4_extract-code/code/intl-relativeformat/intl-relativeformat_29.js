if (!global.Intl) {
    global.Intl = require('intl'); // polyfill for `Intl`
}
var IntlRelativeFormat = require('intl-relativeformat');
var rf = new IntlRelativeFormat('en');
var output = rf.format(dateValue);
