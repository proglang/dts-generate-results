const jsonfile = require('jsonfile')

const file = '/tmp/mayAlreadyExistedData.json'
const obj = { name: 'JP' }

jsonfile.writeFile(file, obj, { flag: 'a' }, function (err) {
  if (err) console.error(err)
})
