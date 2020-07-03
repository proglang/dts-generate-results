'use strict'

const SonicBoom = require('sonic-boom')
const sonic = new SonicBoom(process.stdout.fd) // or '/path/to/destination'

for (var i = 0; i < 10; i++) {
  sonic.write('hello sonic\n')
}
