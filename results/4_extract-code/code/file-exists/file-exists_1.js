const fileExists = require('file-exists');

fileExists('/index.html', (err, exists) => console.log(exists)) // OUTPUTS: true or false

fileExists('/index.html').then(exists => {
  console.log(exists) // OUTPUTS: true or false
})

const exists = await fileExists('/index.html')

console.log(fileExists.sync('/index.html')) // OUTPUTS: true or false
