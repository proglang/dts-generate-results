const jsonfile = require('jsonfile')
const file = '/tmp/data.json'

console.dir(jsonfile.readFileSync(file))
