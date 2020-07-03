const rmfr = require('rmfr');

rmfr('inde*.js'); // doesn't remove `./index.js`
rmfr('inde*.js', {glob: true}); // removes `./index.js`
