const jsonfile = require('jsonfile')
const file = '/tmp/data.json'
jsonfile.readFile(file)
  .then(obj => console.dir(obj))
  .catch(error => console.error(error))
