var Undertaker = require('undertaker');
var CommonRegistry = require('myorg-common-tasks');

var taker = new Undertaker(CommonRegistry({ buildDir: '/dist' }));

taker.task('build', taker.series('clean', function build(cb) {
  // do things
  cb();
}));
