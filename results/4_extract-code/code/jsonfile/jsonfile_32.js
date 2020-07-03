const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFile(file, obj)
  .then(res => {
    console.log('Write complete')
  })
  .catch(error => console.error(error))
