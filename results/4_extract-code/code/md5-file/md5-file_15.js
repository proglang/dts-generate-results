const md5File = require('md5-file/promise')

md5File('LICENSE.md').then(hash => {
  console.log(`The MD5 sum of LICENSE.md is: ${hash}`)
})
