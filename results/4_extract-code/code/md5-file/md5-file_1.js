const md5File = require('md5-file')

/* Async usage */
md5File('LICENSE.md', (err, hash) => {
  if (err) throw err

  console.log(`The MD5 sum of LICENSE.md is: ${hash}`)
})

/* Sync usage */
const hash = md5File.sync('LICENSE.md')
console.log(`The MD5 sum of LICENSE.md is: ${hash}`)
