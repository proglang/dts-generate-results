var distributions = require('distributions');
var normal = distributions.Normal(1 /* mean */, 2 /* std deviation */);

console.log(normal.pdf(1)); // 0.199...
console.log(normal.cdf(1)); // 0.5
console.log(normal.inv(1)); // Infiniy

console.log(normal.mean()); // 1
console.log(normal.median()); // 1
console.log(normal.variance()); // 4
