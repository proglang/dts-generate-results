const caniuse = require('caniuse-api')

caniuse.getSupport('border-radius')
caniuse.isSupported('border-radius', 'ie 8, ie 9')
caniuse.setBrowserScope('> 5%, last 1 version')
caniuse.getSupport('border-radius')
// ...
