var getenv = require('getenv');

var host = getenv('HTTP_HOST'); // same as getenv.string('HTTP_HOST');
var port = getenv.int('HTTP_PORT');
var start = getenv.bool('HTTP_START');

if (start === true) {
  // var server = http.createServer();
  // server.listen(port, host);
}

var abTestRatio = getenv.float('AB_TEST_RATIO');

if (Math.random() < abTestRatio) {
  // test A
} else {
  // test B
}

var keywords = getenv.array('KEYWORDS');
keywords.forEach(function(keyword) {
  // console.log(keyword);
});

var primes = getenv.array('PRIMES', 'int');
primes.forEach(function(prime) {
  // console.log(prime, typeof prime);
});
