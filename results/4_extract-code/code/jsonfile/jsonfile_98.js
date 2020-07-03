const jsonfile = require('jsonfile')

const file = '/tmp/mayAlreadyExistedData.json'
const obj = { name: 'JP' }

jsonfile.writeFileSync(file, obj, { flag: 'a' })
