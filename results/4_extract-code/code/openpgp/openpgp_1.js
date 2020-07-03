var openpgp = require('openpgp'); // use as CommonJS, AMD, ES6 module or via window.openpgp

await openpgp.initWorker({ path:'openpgp.worker.js' }) // set the relative web worker path
