const jsonfile = require('jsonfile')
const file = '/tmp/data.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  console.dir(obj)
})
