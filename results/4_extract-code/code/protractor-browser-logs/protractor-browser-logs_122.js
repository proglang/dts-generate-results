function simple(entries) {
  entries.forEach(function (entry) {
    console.log([entry.level.name, entry.message].join(': '));
  });
}

function colored(entries) {
  var colors = { INFO: 35 /* magenta */, WARNING: 33 /* yellow */, SEVERE: 31 /* red */};
  entries.forEach(function (entry) {
    console.log('\u001b[' + (colors[entry.level.name] || 37) + 'm' + [entry.level.name, entry.message].join(': ') + '\u001b[39m');
  });
}

var browserLogs = require('protractor-browser-logs');
browserLogs(browser, {
  reporters: [simple, colored]
});
