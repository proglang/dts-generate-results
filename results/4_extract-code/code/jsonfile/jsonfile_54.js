const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFile(file, obj, { spaces: 2, EOL: '\r\n' }, function (err) {
  if (err) console.error(err)
})
