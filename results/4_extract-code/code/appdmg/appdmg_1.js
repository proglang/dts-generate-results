
const appdmg = require('appdmg');
const ee = appdmg({ source: 'test/appdmg.json', target: 'test.dmg' });

ee.on('progress', function (info) {

  // info.current is the current step
  // info.total is the total number of steps
  // info.type is on of 'step-begin', 'step-end'

  // 'step-begin'
  // info.title is the title of the current step

  // 'step-end'
  // info.status is one of 'ok', 'skip', 'fail'

});

ee.on('finish', function () {
  // There now is a `test.dmg` file
});

ee.on('error', function (err) {
  // An error occurred
});

