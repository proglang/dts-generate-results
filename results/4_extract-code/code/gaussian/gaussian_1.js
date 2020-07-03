var gaussian = require('gaussian');
var distribution = gaussian(mean, variance);
// Take a random sample using inverse transform sampling method.
var sample = distribution.ppf(Math.random());
