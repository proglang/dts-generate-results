const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFileSync(file, obj)
